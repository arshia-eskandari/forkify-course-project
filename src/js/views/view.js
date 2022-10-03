import icons from 'url:../../img/icons.svg';

export default class View {
    _data;
    render(data) {
        if (!data || (Array.isArray(data) && !data.length))
            return this.renderError();
        this._data = data;
        const html = this._generateHTML();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }

    update(data) {
        this._data = data;
        const html = this._generateHTML();
        const newDOM = document.createRange().createContextualFragment(html);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(
            this._parentElement.querySelectorAll('*')
        );

        // update changed text
        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];
            if (
                !newEl.isEqualNode(curEl) &&
                newEl.firstChild?.nodeValue.trim() !== ''
            ) {
                curEl.textContent = newEl.textContent;
            }

            // update change attributes
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr =>
                    curEl.setAttribute(attr.name, attr.value)
                );
            }
        });
    }

    renderError(message = this._errorMssg) {
        const errorHTML = `
        <div class="error">
            <div>
                <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', errorHTML);
    }

    renderMessage(message = this._mssg) {
        const messageHTML = `
        <div class="message">
            <div>
                <svg>
                    <use href="${icons}#icon-smile"></use>
                </svg>
            </div>
            <p>${message}</p>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', messageHTML);
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renderSpinner() {
        const spinnerHTML = `
            <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
            </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', spinnerHTML);
    }
}
