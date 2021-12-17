import instance from "./instance";
export const addProductCart = (cart: any) => {
    const url = "/cart";
    return instance.post(url, cart);
};
export const listCart = (cart: any) => {
    const url = "/cart";
    return instance.get(url, cart);
};