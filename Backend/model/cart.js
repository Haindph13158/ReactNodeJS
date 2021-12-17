import  mongoose  from "mongoose";
const {ObjectId} = mongoose.Schema;
const CartSchema = new mongoose.Schema({
   user:{
    type: ObjectId,
    ref: "User",
   },
   listOrder:[
       { 
           product: {
               type: ObjectId,
               ref: "Product"
           },
           quantity: {
               type: Number
           },
           
       }
   ]

   
   
},{timestamps: true});

export default mongoose.model('Cart', CartSchema);
