//we took in data on the front end and this is where we're making the comparison.
//this must be altered to fit our score system

// LOAD DATA from our friends.js file
const friendData = require("../survey/friends");


// ROUTING
module.exports = (app) => {

    // API GET Requests - we take friendData and put it in a JSON package
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    // API POST Requests - we take friendData and create more variables
    app.post("/api/friends", (req, res) => {
        let userScore = req.body.scores; //
        const scoresArr = [];   
        let bestMatch = 0;


        for (var i = 0; i < friendData.length; i++) {
            var score = 0; 
                if (friendData[i].like1 === userScore.like1) {score ++};
                if (friendData[i].like2 === userScore.like2) {score ++};
                if (friendData[i].like3 === userScore.like1) {score ++};
                if (friendData[i].like4 === userScore.like1) {score ++};
                if (friendData[i].like5 === userScore.like1) {score ++};
                if (friendData[i].like6 === userScore.like1) {score ++};
                if (friendData[i].like7 === userScore.like1) {score ++};
                if (friendData[i].like8 === userScore.like1) {score ++};
                if (friendData[i].like9 === userScore.like1) {score ++};
                if (friendData[i].like10 === userScore.like1) {score ++};
                if (friendData[i].like11 === userScore.like1) {score ++};
                if (friendData[i].like12 === userScore.like1) {score ++};
                if (friendData[i].like13 === userScore.like1) {score ++};
                if (friendData[i].like14 === userScore.like1) {score ++};
                if (friendData[i].like15 === userScore.like1) {score ++};
                if (friendData[i].like16 === userScore.like1) {score ++};
                if (friendData[i].like17 === userScore.like1) {score ++};
                if (friendData[i].like18 === userScore.like1) {score ++};
                if (friendData[i].like19 === userScore.like1) {score ++};
                if (friendData[i].like20 === userScore.like1) {score ++};
                if (friendData[i].dislike21 === userScore.like1) {score ++};
                if (friendData[i].dislike22 === userScore.like1) {score ++};
                if (friendData[i].dislike23 === userScore.like1) {score ++};
                if (friendData[i].dislike24 === userScore.like1) {score ++};
                if (friendData[i].dislike25 === userScore.like1) {score ++};
                if (friendData[i].dislike26 === userScore.like1) {score ++};
                if (friendData[i].dislike27 === userScore.like1) {score ++};
                if (friendData[i].dislike28 === userScore.like1) {score ++};
                if (friendData[i].dislike29 === userScore.like1) {score ++};
                if (friendData[i].dislike30 === userScore.like1) {score ++};
                if (friendData[i].dislike31 === userScore.like1) {score ++};
                if (friendData[i].dislike32 === userScore.like1) {score ++};
                if (friendData[i].dislike33 === userScore.like1) {score ++};
                if (friendData[i].dislike34 === userScore.like1) {score ++};
                if (friendData[i].dislike35 === userScore.like1) {score ++};
                if (friendData[i].dislike36 === userScore.like1) {score ++};
                if (friendData[i].dislike37 === userScore.like1) {score ++};
                if (friendData[i].dislike38 === userScore.like1) {score ++};
                if (friendData[i].dislike39 === userScore.like1) {score ++};
                if (friendData[i].dislike40 === userScore.like1) {score ++};

            scoresArr.push(score);
        }

        var largestNum = Math.max(...scoresArr)
        var indexOfLargest = scoresArr.indexOf(largestNum);
        var match = scoresArr[indexOfLargest]
        console.log(match)
        res.json(match)
    });


    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};

module.exports = matchingLogic.js;