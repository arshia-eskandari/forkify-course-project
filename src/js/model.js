// import { async } from 'regenerator-runtime';
import { API_URL, KEY, RES_PER_PAGE } from './config';
import { AJAJ } from './helpers';

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        resultsPerPage: RES_PER_PAGE,
        page: 1,
    },
    bookmarks: [],
};

const createRecipeObject = function (data) {
    const { recipe } = data.data;
    return {
        id: recipe.id,
        cookingTime: recipe.cooking_time,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        sourceURL: recipe.source_url,
        ingredients: recipe.ingredients,
        servings: recipe.servings,
        ...(recipe.key && { key: recipe.key }),
    };
};

export const loadRecipe = async function (recipeID) {
    try {
        const data = await AJAJ(`${API_URL}${recipeID}?key=${KEY}`);
        state.recipe = createRecipeObject(data);

        state.recipe.bookmarked = true;
        if (!state.bookmarks.some(bookmark => bookmark.id === recipeID))
            state.recipe.bookmarked = false;
    } catch (err) {
        throw err;
    }
};

export const loadSearchResults = async function (query) {
    try {
        const data = await AJAJ(`${API_URL}?search=${query}&key=${KEY}`);

        state.search.query = query;

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
                ...(rec.key && { key: rec.key }),
            };
        });
    } catch (err) {
        throw err;
    }
};

export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    });

    state.recipe.servings = newServings;
};

const presistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
    state.bookmarks.push(recipe);

    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    presistBookmarks();
};

export const deleteBookmark = function (id) {
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);

    if (id === state.recipe.id) state.recipe.bookmarked = false;
    presistBookmarks();
};

export const uploadRecipe = async function (newRecipe) {
    try {
        const ingredients = Object.entries(newRecipe)
            .filter(([e1, e2]) => e1.startsWith('ingredient') && e2.trim())
            .map(ing => {
                const ingArr = ing[1].split(',').map(el => el.trim());
                if (ingArr.length !== 3)
                    throw new Error(
                        'Wrong ingredient format! Please, use the right format ;)'
                    );
                const [quantity, unit, description] = ingArr;

                return {
                    quantity: quantity ? +quantity : null,
                    unit,
                    description,
                };
            });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            publisher: newRecipe.publisher,
            image_url: newRecipe.image,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients,
        };
        const data = await AJAJ(`${API_URL}?key=${KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (err) {
        throw err;
    }
};

const init = function () {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();
