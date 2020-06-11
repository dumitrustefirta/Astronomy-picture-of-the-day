import { formattedDate, renderPage, addElement, addPictureOfDay} from './utils.js';

export function Apod(id) {
    this.id = id;
    this.date = undefined;
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.id);

    this.formattedDate = formattedDate;

    this.renderPage = renderPage;

    this.addElement = addElement;

    this.addElement();
    body.append(this.container);

    this.addPictureOfDay = addPictureOfDay;
}
