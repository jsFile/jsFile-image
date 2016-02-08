import ImageEngine from './../../src/index';

describe('jsFile-image', () => {
    describe('Library imports', () => {
        it('should import JS module', () => {
            assert.isFunction(ImageEngine);
        });

        it('should exist in global scope', () => {
            assert.isFunction(window.JsFileImage.default);
        });
    });
});