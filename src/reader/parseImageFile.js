import JsFile from 'JsFile';
const {errors: {notFoundMethodCreateDocument}, normalizeDataUri} = JsFile.Engine;

export default function parseImageFile () {
    return new Promise(function (resolve, reject) {
        let promise;
        const fileName = this.fileName;

        if (this.isWbmp()) {
            promise = this.parseWbmp();
        } else {
            promise = this.readFileEntry({
                file: this.file,
                method: 'readAsDataURL'
            }).then((src) => {
                return {
                    properties: {
                        src: normalizeDataUri(src, fileName)
                    }
                };
            });
        }

        promise.then(function (result) {
            if (typeof this.createDocument !== 'function') {
                reject(new Error(notFoundMethodCreateDocument));
                return;
            }

            this.createDocument(result).then(resolve, reject);
        }.bind(this));

        promise.catch(reject);
    }.bind(this));
}