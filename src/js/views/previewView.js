import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PreviewView extends View {
    _parentElement = '';

    generateHTML(data) {
        const id = window.location.hash.slice(1);
        const html = data.reduce((acc, rec) => {
            const htmlToAdd = `
            <li class="preview">
                <a class="preview__link ${
                    rec.id === id ? 'preview__link--active' : ''
                }" href="#${rec.id}">
                    <figure class="preview__fig">
                        <img src="${rec.image}" alt="${rec.title}"/>
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${rec.title}</h4>
                        <p class="preview__publisher">${rec.publisher}</p>
                        <div class="preview__user-generated ${
                            rec.key ? '' : 'hidden'
                        }">
                            <svg>
                                <use href="${icons}#icon-user"></use>
                            </svg>
                        </div>
                    </div>
                </a>
            </li>
            `;
            return acc + htmlToAdd;
        }, '');
        return html;
    }
}

export default new PreviewView();
