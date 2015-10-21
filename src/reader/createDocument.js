import JsFile from 'JsFile';
const {Document, Engine: {normalizeDataUri}} = JsFile;

export default function (data) {
    return new Promise(function (resolve) {
        const page = Document.elementPrototype;
        const img = Document.elementPrototype;
        const {fileName} = this;

        page.properties.tagName = 'DIV';
        img.properties.tagName = 'IMG';
        img.properties.src = normalizeDataUri(data, fileName);
        page.children.push(img);

        resolve(new Document({
            meta: {
                name: fileName
            },
            content: [page]
        }));
    }.bind(this));
};
