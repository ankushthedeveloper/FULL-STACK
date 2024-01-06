import mongoose, { Schema, schema } from "mongoose";

const userSchema = new schema(
    {
        username: {

            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        Email: {

            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,

        },

        fullname: {

            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true

        },

        avatar: {

            type: String, //cloudinary url
            required: true,

        },

        coverImage: {

            type: String, //cloudinary url
            required: true,

        },

        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"


            }

        ],

        password:{
            type:String,
            required:[true,'password is required']
        },

        refreshToken:{
            type:String
        }



    },{
        timestamps:true
    }
)

export const User=mongoose.model("User",userSchema)





9