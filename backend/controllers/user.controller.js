import mongoose from "mongoose";
import User from "../models/user.model.js";

export const getUsers=async(req,res)=>{
    try
    {
        const users =await User.find({});
        res.status(200).json({sucess:true,data:users});
    }catch(error)
    {
        console.log("error in fetching products:",error.message);
        res.status(500).json({sucess:false,message:"Server Error"});
    }
}

export const createUser=async (req, res) => {
    const user = req.body;

    // Validate required fields
    if (!user.name || !user.age || !user.type || !user.phone || !user.address || !user.password) {
        return res.status(400).json({ success: false, message: "Please provide all the fields" });
    }

    const newUser = new User(user);

    try {
        await newUser.save();
        res.status(201).json({ success: true, data: newUser }); // Fixed: Use res.status().json()
    } catch (error) {
        console.error("Error in create user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id,user, { new: true });
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        console.error("Error in updating user:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteUser =async(req,res)=>{
    const{id}=req.params
    try{
        await User.findByIdAndDelete(id);
        res.status(200).json({sucess:true,message:"Product deleted"});
    }
    catch(error)
    {
        res.status(404).json({sucess:false,message:"Product not found"});
    }
};