
var friends = require("../data/friends");
// Your apiRoutes.js file should contain two routes:


module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        // console.log("res: ", res)
        res.json(friends);

    });
    app.post("/api/friends", function (req, res) {
        //This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        
        console.log("result (friends): ", friends)
        //loop through arr: for each object, loop through scores arr values and tally abs value of difference
        //compare values from req.body (the user's) to friends (friends.js)


        var lowest = 1000;
        var lowestFriend = "none";
        for (var i = 0; i < friends.length; i++) {
            var comparisonValues = [];
            var sum = 0;
            //populate comparisonValues arr with differences of each score
            for (var j = 0; j < friends[i].scores.length; j++) {
                comparisonValues.push(Math.abs(parseInt(req.body.scores[j]) - friends[i].scores[j]));
            }
            //add up differences in comparisonValues arr
            for (var k = 0; k < comparisonValues.length; k++) {
                sum += comparisonValues[k];
            }
            //check if total difference for each friend is lowest, if so, replace previous lowest and log friend name
            if (sum < lowest) {
                lowest = sum;
                lowestFriend = friends[i].name;
            }
        }
        console.log("comp values arr:", comparisonValues);
        console.log("best match: ", lowestFriend);
        friends.push(req.body);
    });
}
