import {Document} from 'JsFile';

export default function (data) {
    return new Promise(function (resolve) {
        const page = Document.elementPrototype;
        const img = Document.elementPrototype;

        page.properties.tagName = 'DIV';
        img.properties.tagName = 'IMG';
        img.properties.src = data;
        page.children.push(img);

        resolve(new Document({
            name: this.fileName,
            pages: [page]
        }));
    }.bind(this));
};
