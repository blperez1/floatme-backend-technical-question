const mongoose = require("mongoose");
const User = mongoose.model("User")

exports.list_all_users = function (req, res) {
    User.find({}, function(err, user) {
        if(err) res.send(err)
        res.json(user)

    })

}

exports.create_new_user = function (req, res) {
    const new_user = new User(req.body)
    new_user.save(function(err, user) {
        if(err) res.send(err)
        res.json(user)
    })

}

exports.read_user = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if(err) res.send(err)
        res.json(user)
    })
}

exports.update_user = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true},
        function(err, user){
            if(err) res.send(err)
            res.json(user)
        })
}

exports.delete_user = function (req, res) {
    User.remove({_id: req.params.userId}, function(err, user) {
        if(err) res.send(err)
        res.json({message: "User successfully deleted."})
    })
}

