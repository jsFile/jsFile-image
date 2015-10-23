import {Engine, defineEngine} from 'JsFile';
import parseImageFile from './reader/parseImageFile';
import createDocument from './reader/createDocument';
import parseWbmp from './reader/parseWbmp';

/**
 * @description Supported files by engine
 * @type {{mime: Array}}
 */
const files = {
    extension: [
        'gif',
        'jpg',
        'jpeg',
        'pjpeg',
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
    createDocument = createDocument

    files = files

    parser = parseImageFile

    parseWbmp = parseWbmp

    isWbmp () {
        return Boolean(this.file && Engine.validateFile(this.file, wbmpFiles));
    }

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }

    static mimeTypes = files.mime.slice(0)
}

defineEngine(ImageEngine);

export default ImageEngine;