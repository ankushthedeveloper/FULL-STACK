import {asyncHandler} from "../utils/asyncHandler.js";


const registerUser=asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"ok"
    })

    const {fullName,email,username,password}=req.body
    console.log(email)
    
})

export {registerUser,}