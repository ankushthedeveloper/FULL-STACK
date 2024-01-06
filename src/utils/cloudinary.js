import { v2 as cloud } from "cloudinary";
import fs from 'fs'


cloudinary.config ({
    
        cloud_name:process.env.CLOUDINARY_cloud_name ,
        api_key: process.env.CLOUDINARY_api_key,
        api_secret:process.env.CLOUDINARY_api_secret
     
});

const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        const response=await cloudinary.v2.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
          console.log("file is uploaded",response.url);
          return response;
          
        }catch (error) {
            fs.unlinkSync(localFilePath)
        console.log("uploadCloudinary error");
    }
}



cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });