import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import {readdirSync} from 'fs';

require('dotenv').config();


const app = express();
mongoose.connect(process.env.DATABASE_URI)
.then(() => {
    console.log("Connect DB successfully");
})
.catch(error=>{
    console.log("Failed", error);
})
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors()); // cross origin

// Router
readdirSync('./routes').map(route => {
    return app.use("/api", require(`./routes/${route}`))
})



const port = process.env.PORT || 8000    
app.listen(port, () => {
    console.log('Sever is running' ,port);
})