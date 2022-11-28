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
            let prodAlreadyAdded = state.productAddedToCart.find(prod => prod.id === payload.data.id);
            if(prodAlreadyAdded) alert('already Added');
            else {
                state.count++;
                state.productAddedToCart.push(payload.data);
            }
        },
        getProductWishlist(state,payload){
            console.log(state);
            let prodAlreadyAdded = state.state.wishListedProducts.find(prod => prod.id === payload.data.id);
            if(prodAlreadyAdded) alert('already wishlisted');
            else {
                state.state.wishlistCount++;
                store.state.wishListedProducts.push(payload.data);
            }
        }
    }
});

export default store;
