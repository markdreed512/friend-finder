
var friendsData = require("../data/friends");
// Your apiRoutes.js file should contain two routes:


module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
    app.get("api/friends", function (req, res) {
        return res.json(friends);
        //what is this "friends" that I just passed in?
    });
    app.post("/api/friends", function () {
        //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    });
}
