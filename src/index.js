
//require('dotenv).config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 5800, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})










/*;(async () =>{
    try {
    await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME')
    app.on("error",(error)=>{
        console.log("Errrrr");
        throw error
    })


    app.listen(process.env.PORT,()=>{
        console.log('APP is listening on port ${process.env.PORT}');
    }) 
    } catch (error
        
    ) {
        console.log("Error:",error);
    throw error;    }
}
) ()*/