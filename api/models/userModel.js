const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field cannot be empty."]
},
age: {
    type: Number,
        required: [true, "You don’t have to use your real age, just add a number."]
},
dateJoined: {
    type: Date,
default: Date.now
},
dateUpdated:{
    type: Date,
default: Date.now
}
})
module.exports = mongoose.model("User", UserSchema);