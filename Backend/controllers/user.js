import User from '../model/user';
export const userById = async (req, res, next, id) => {
    const user = await User.findById(id).exec(); // tìm user dựa trên ID
    req.profile = user;
    next()
}
export const read = (req,res) => {
    const user = req.profile;
    user.hashed_password = undefined;
    user.sait = undefined;
    res.json(user)
}
