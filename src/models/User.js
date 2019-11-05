const {Schema, model} = require("mongoose");

const userSchema = Schema ({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:String
}, {
        timestamps: true
});

module.exports = model("User", userSchema)