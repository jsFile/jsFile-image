import chai from 'chai';
import chaiJsonSchema from 'chai-json-schema';
import schemas from 'jsfile-schemas';
import JsFile from 'JsFile';
import ImageEngine from './../../src/index';

chai.use(chaiJsonSchema);
const assert = chai.assert;

describe('jsFile-image', () => {
    let files;
    const documentSchema = schemas.document;

    before(() => {
        files = window.files;
    });

    it('should exist', () => {
        assert.isFunction(ImageEngine);
    });

    it('should read the file', function () {
        this.timeout(15000);
        const queue = [];
        let name;
        for (name in files) {
            if (files.hasOwnProperty(name)) {
                const jf = new JsFile(files[name], {
                    workerPath: '/base/dist/workers/'
                });
                const promise = jf.read().then(done, done);

                queue.push(promise);

                function done (result) {
                    assert.instanceOf(result, JsFile.Document, name);
                    const json = result.json();
                    assert.jsonSchema(json, documentSchema, name);
                    const isEmpty = json.length === 0;
                    assert.isFalse(isEmpty, 'File ' + name + 'shouldn\'t be empty');
                }
            }
        }

        return Promise.all(queue);
    });
});