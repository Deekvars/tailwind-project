import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        wishlistCount: 0,
        productAddedToCart: [],
        wishListedProducts: []
    },
    mutations: {
        /*doIncreaseCartCount(state) {
            state.count++;
        },*/
        /*getCartProducts(product) {
            console.log(product);
            this.productAddedToCart.push(product);
        }*/
    },
    actions: {
        addToCart ({commit,state}, payload) {
            console.log(payload, commit, state);
            state.count++;
            state.productAddedToCart.push(payload.data);
        },
        getProductWishlist(state,payload){
            console.log(state);
            state.state.wishlistCount++;
            store.state.wishListedProducts.push(payload.data);
        }
    }
});

export default store;
