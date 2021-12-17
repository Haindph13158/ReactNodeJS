import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema;
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required",
        minlength: [3, "too short"],
        maxlength: [32, "too long"]
    },
    price: {
        type: Number,
        
    },
    image: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        
       
    },
    quantity:{
        type: Number
    },
    category: {
        type: ObjectId,
        ref: 'Category',
     
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    }
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
