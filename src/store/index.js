import { createStore } from 'vuex';
import productsModuel from './modules/products.js';
const store = createStore({
    modules:{
        prods: productsModuel
    }
});

export default store;