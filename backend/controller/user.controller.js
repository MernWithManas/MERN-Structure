
import asyncHandler from "../util/asyncHandler.js"
import User from "../models/user.model.js";


const signUpUser = asyncHandler( async (req, res) => {

    try {
        const {name, email, password} = req.body ;

        const existedUser = await User.findOne({email});

        if(existedUser){
            return res.send("User already exist")
        }

        const newUser = await User.create({
            name, email, password
        })

        newUser.save();
        console.log(newUser);

    } catch (error) {
        console.log("Error occured while Signing up !");
    }
}, {timestamps: true})


export {signUpUser} ;