import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
            commit('SET_PRODUCTS', response.data);
            console.log('response', response);
        })
}

export const getProduct = ({ commit }, productId) => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
            commit('SET_PRODUCT', response.data);
            console.log('response', response);
        })
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
    console.log(product)
    commit('ADD_TO_CART', { product, quantity });
    axios.post('https://fakestoreapi.com/cart', {
        product_id: product.id,
        quantity
    });

}

export const getCartItems = ({ commit }) => {
    axios.get('https://fakestoreapi.com/cart')
        .then(response => {
            commit('SET_CART', response.data);
            return response.data
        })
}

export const removeProductFromCart = ({ commit }, product) => {
    commit('REMOVE_PRODUCT_FROM_CART', product);
    axios.delete(`https://fakestoreapi.com/cart/${product.id}`);
}

export const clearCartItems = ({ commit }) => {
    commit('CLEAR_CART_ITEMS');
    axios.delete('https://fakestoreapi.com/cart');
}
