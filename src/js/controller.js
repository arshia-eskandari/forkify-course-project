'use strict';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { MODAL_CLOSE_SEC } from './config.js';

// https://forkify-api.herokuapp.com/v2
// API key: 97617a70-6586-4ace-b40f-382086b0048a
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886

///////////////////////////////////////

if (module.hot) {
    module.hot.accept();
}

const controlRecipes = async function () {
    try {
        const recipeID = window.location.hash.slice(1);
        if (!recipeID) return;
        recipeView.renderSpinner();

        resultsView.update(model.getSearchResultsPage());
        bookmarksView.update(model.state.bookmarks);

        // 1. loading recipe
        await model.loadRecipe(recipeID);

        // 2. rendering recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        recipeView.renderError();
    }
};

const controlSearchResults = async function () {
    try {
        const query = searchView.getQuery();
        if (!query) return;

        resultsView.renderSpinner();
        await model.loadSearchResults(query);
        resultsView.render(model.getSearchResultsPage(1));
        paginationView.render(model.state.search);
    } catch (err) {
        console.log(err);
    }
};

const controlPagination = function (goToPage) {
    resultsView.render(model.getSearchResultsPage(goToPage));
    paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
    model.updateServings(newServings);
    recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
    // 1. add/remove bookmarks
    if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
    else model.deleteBookmark(model.state.recipe.id);

    // 2. update the recipe view
    recipeView.update(model.state.recipe);

    // 3. render bookmarks
    bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
    bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
    try {
        addRecipeView.renderSpinner();

        await model.uploadRecipe(newRecipe);
        console.log(model.state.recipe);

        recipeView.render(model.state.recipe);

        addRecipeView.renderMessage();

        bookmarksView.render(model.state.bookmarks);

        window.history.pushState(null, '', `#${model.state.recipe.id}`);

        setTimeout(function () {
            addRecipeView.toggleWindow();
        }, MODAL_CLOSE_SEC * 1000);
    } catch (err) {
        addRecipeView.renderError(err.message);
    }
};

const init = function () {
    bookmarksView.addHandlerRender(controlBookmarks);
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    searchView.addHandlerSearch(controlSearchResults);
    paginationView.addHandlerClick(controlPagination);
    addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();

// const clearBookmarks = function () {
//     localStorage.clear('bookmarks');
// };
