import {Engine, defineEngine} from 'JsFile';
import parseImageFile from './reader/parseImageFile';
import createDocument from './reader/createDocument';

/**
 * @description Supported files by engine
 * @type {{mime: Array}}
 */
const files = {
    mime: [
        'image/gif',
        'image/jpg',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/svg+xml',
        'image/tiff',
        'image/vnd.microsoft.icon',
        'image/vnd.wap.wbmp'
    ]
};

class ImageEngine extends Engine {
    createDocument = createDocument

    files = files

    parser = parseImageFile

    static test (file) {
        return Boolean(file && Engine.validateFile(file, files));
    }

    static mimeTypes = files.mime.slice(0)
}

defineEngine(ImageEngine);

export default ImageEngine;