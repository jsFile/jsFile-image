import JsFile from 'JsFile';
const {errors: {notFoundMethodCreateDocument}} = JsFile.Engine;

export default function () {
    return new Promise(function (resolve, reject) {
        this.readFileEntry({
            file: this.file,
            method: 'readAsDataURL'
        }).then(function (result) {
            if (typeof this.createDocument !== 'function') {
                reject(new Error(notFoundMethodCreateDocument));
                return;
            }

            this.createDocument(result).then(resolve, reject);
        }.bind(this),
        reject);
    }.bind(this));
}