import previewView from './previewView.js';
import View from './view.js';

class BookmarksView extends View {
    _parentElement = document.querySelector('.bookmarks__list');
    _errorMssg = 'No bookmarks yet! find a nice recipe and bookmark it ;)';
    _mssg = '';

    addHandlerRender(handler) {
        window.addEventListener('load', handler)
    }
    
    _generateHTML() {
        return previewView.generateHTML(this._data);
    }
}

export default new BookmarksView();
