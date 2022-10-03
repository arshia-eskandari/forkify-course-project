import previewView from './previewView.js';
import View from './view.js';

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMssg = 'No recipes found for your query! Please try again ;)';
    _mssg = '';

    _generateHTML() {
        return previewView.generateHTML(this._data);
    }
}

export default new ResultsView();
