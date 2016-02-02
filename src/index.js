import JsFile from 'JsFile';
import parseImageFile from './reader/parseImageFile';
import createDocument from './reader/createDocument';
import parseWbmp from './reader/parseWbmp';

const {Engine, defineEngine} = JsFile;

/**
 * @description Supported files by engine
 * @type {{mime: Array}}
 */
const files = {
    extension: [
        'gif',
        'jpg',
        'jpeg',
        'png',
        'svg',
        'ico',
        'tif',
        'tiff'
    ],
    mime: [
        'image/gif',
        'image/jpg',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/svg+xml',
        'image/x-icon',
        'image/tiff',
        'image/tiff-fx',
        'image/vnd.microsoft.icon'
    ]
};

const wbmpFiles = {
    extension: ['wbmp'],
    mime: ['image/vnd.wap.wbmp']
};

files.extension.push.apply(files.extension, wbmpFiles.extension);
files.mime.push.apply(files.mime, wbmpFiles.mime);

class ImageEngine extends Engine {
    constructor () {
        super(...arguments);
        this.createDocument = createDocument;
        this.files = files;
        this.parser = parseImageFile;
        this.parseWbmp = parseWbmp;
    }

    isWbmp () {
        return Boolean(this.file && Engine.validateFile(this.file, wbmpFiles));
    }

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }
}

ImageEngine.mimeTypes = files.mime.slice(0);
defineEngine(ImageEngine);

export default ImageEngine;
