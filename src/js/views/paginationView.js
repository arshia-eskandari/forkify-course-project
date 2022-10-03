import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;

            const goToPage = +btn.dataset.goto;

            handler(goToPage);
        });
    }

    _generateHTML() {
        const numPages = Math.ceil(
            this._data.results.length / this._data.resultsPerPage
        );
        const currentPage = this._data.page;

        // page 1 (more than 1 page)
        if (currentPage === 1 && numPages > 1) {
            return this.nextBtnHTML(currentPage);
        }

        // last page
        if (currentPage === numPages) {
            return this.prevBtnHTML(currentPage);
        }

        // other page
        if (currentPage < numPages) {
            return (
                this.prevBtnHTML(currentPage) + this.nextBtnHTML(currentPage)
            );
        }

        // page 1 (the only page)
        return '';
    }

    prevBtnHTML(currentPage) {
        return `
            <button data-goto="${
                currentPage - 1
            }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${currentPage - 1}</span>
            </button>
        `;
    }

    nextBtnHTML(currentPage) {
        return `
            <button data-goto="${
                currentPage + 1
            }" class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>  
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
    }
}

export default new PaginationView();
