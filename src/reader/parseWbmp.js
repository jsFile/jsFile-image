import JsFile from 'JsFile';
const {errors: {invalidReadFile}} = JsFile.Engine;

function writeImageData (data, bit, index) {
    const color = bit ? 255 : 0;
    data[index++] = color;
    data[index++] = color;
    data[index++] = color;
    data[index++] = 255;

    return index;
}

function decode (arrayBuffer) {
    const bytes = new Uint8Array(arrayBuffer);
    let ptr = 0;

    // Read unsigned multi-byte integer (6.3.1) from the byte stream.
    function readMultiByteInteger (bytes) {
        let result = 0;

        while (true) {
            if (result & 0xfe000000) {
                return null;
            }

            const b = bytes[ptr++];
            result = (result << 7) | (b & 0x7f);

            if (!(b & 0x80)) {
                return result;
            }
        }
    }

    // Support only image type 0: B/W, no compression
    if (readMultiByteInteger(bytes) !== 0) {
        return null;
    }

    /**
     * @description Unsigned octet from the byte stream
     * @type {number}
     */
    const octet = bytes[ptr++] & 0xff;

    // Don't expect any extended headers here.
    if (octet !== 0) {
        return null;
    }

    const width = readMultiByteInteger(bytes);
    const height = readMultiByteInteger(bytes);

    // Reject incorrect image dimensions
    if (width === 0 || width > 65535 || height == 0 || height > 65535) {
        return null;
    }

    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; x += 8) {
            const bits = bytes[ptr++];
            let w = (y * width + x) * 4;

            w = writeImageData(data, bits & 0x80, w);
            w = writeImageData(data, bits & 0x40, w);
            w = writeImageData(data, bits & 0x20, w);
            w = writeImageData(data, bits & 0x10, w);
            w = writeImageData(data, bits & 0x08, w);
            w = writeImageData(data, bits & 0x04, w);
            w = writeImageData(data, bits & 0x02, w);
            w = writeImageData(data, bits & 0x01, w);
        }
    }

    if (ptr > bytes.length) {
        return null;
    }

    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL('image/png');
}

export default function () {
    return new Promise(function (resolve, reject) {
        const promise = this.readFileEntry({
            file: this.file,
            method: 'readAsArrayBuffer'
        });

        promise.then((arrayBuffer) => {
            const src = decode(arrayBuffer);
            if (!src) {
                return reject(new Error(invalidReadFile));
            }

            resolve({
                properties: {
                    src
                }
            });
        });

        promise.catch(reject);
    }.bind(this));
};