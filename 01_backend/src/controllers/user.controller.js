import{asyncHandler} from "../utils/asyncHandler.js";

//  registering a user

const registerUser= asyncHandler(async(req,res)=>{
 return   res.status(200).json({
        message:"ok"
    })

})

export {registerUser}