const userCtrl = {};

const User = require("../models/User");


userCtrl.getUsers = async(req,res) =>{
    const users = await User.find();
    res.json(users)
} 

userCtrl.createUser = async(req,res) =>{
    const {username,email} = req.body;
    const newUser = new User(
        {username: username,
        email: email});
    await newUser.save();
    res.json("User created")
}
userCtrl.deleteUser = async(req,res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json("Users Deleted")

}

module.exports = userCtrl;