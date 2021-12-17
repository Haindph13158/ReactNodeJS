

import Cart from "../model/cart";

export const listCart = async (req, res) => {
   
    
    const cart = await Cart.find({})
    .populate('user','email')
    .populate({
        path: "listOrder",
        populate: { path: "product" },
      });
    res.json(cart);

}
export const AddCart = async (req, res) => {
    const {user, listOrder} = req.body 
    const cart = await new Cart({ user, listOrder }).save();
    res.json(cart);

}