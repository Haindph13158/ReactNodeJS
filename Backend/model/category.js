import  mongoose  from "mongoose";
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required",
       
    },
    slug:{
        type: String,
        unique: true,
        lowercase: true,
        index: true
    }
},{timestamps: true});

export default mongoose.model('Category', CategorySchema);
