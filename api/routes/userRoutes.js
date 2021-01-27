module.exports = function(app){
    const users = require("../controllers/userController");
    app.route("/users")
        .get(users.list_all_users)
        .post(users.create_new_user);
    app.route("/users/:userId")
.get(users.read_user)
        .put(users.update_user)
        .delete(users.delete_user);
}
