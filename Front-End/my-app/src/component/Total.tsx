import { createSelector } from "reselect";

const cartItems = (state: any) => state.cart.products;

export const cartPrice = createSelector(cartItems, items => items.reduce((total : any, item: any) => {
    return total + (+item.price * item.quantity) // convert item.price to number
}, 0));