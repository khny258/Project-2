

//this routing assumes we're pulling data from the subfolder survey/friends
// const friendData = require("../survey/friends");
const matchScore = 10;
const misMatchScore = -1;
const connection = require("../config/connection2")

// ROUTING
module.exports = (app) => {

    // // API GET Requests - we take friendData and put it in a JSON package but from here we need to get all 
    // app.get("/api/friends", (req, res) => {
    //     res.json(friendData);
    //     afterConnection();
    // });

    // API POST Requests - we take friendData and create more variables
    app.post("/api/friends", (req, res) => {
        let userScore = req.body.scores; //
        const scoresArr = [];   
        let bestMatch = 0;

        connection.query('SELECT * FROM timbr_user', function (error, friendData, fields) {
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
            console.log(friendData);

            friendData=friendData.filter(genderUser => {
                return userScore.partnerGender.includes(genderUser.gender);
            });
    
    
      
            for (var i = 0; i < friendData.length; i++) {
                var n = 0;
                var d = 0;
                
                //how would you include this friendData in a table?
                    if (friendData[i].hip_hop && userScore.hip_hop) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].hip_hop !== userScore.hip_hop) {n+=misMatchScore;}
                    if (friendData[i].pop && userScore.pop) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].pop !== userScore.pop) {n+=misMatchScore;}
                    if (friendData[i].country && userScore.country) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].country !== userScore.country) {n+=misMatchScore;}
                    if (friendData[i].r_b && userScore.r_b) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].r_b !== userScore.r_b) {n+=misMatchScore;}
                    if (friendData[i].latin && userScore.latin) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].latin !== userScore.latin) {n+=misMatchScore;}
                    if (friendData[i].rock && userScore.rock) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].rock !== userScore.rock) {n+=misMatchScore;}
                    if (friendData[i].dance_electronic && userScore.dance_electronic) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].dance_electronic !== userScore.dance_electronic) {n+=misMatchScore;}
                    if (friendData[i].indie && userScore.indie) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].indie !== userScore.indie) {n+=misMatchScore;}
                    if (friendData[i].folk_acoustic && userScore.folk_acoustic) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].folk_acoustic !== userScore.folk_acoustic) {n+=misMatchScore;}
                    if (friendData[i].classical && userScore.classical) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].classical !== userScore.classical) {n+=misMatchScore;}
                    if (friendData[i].jazz && userScore.jazz) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].jazz !== userScore.jazz) {n+=misMatchScore;}
                    if (friendData[i].soul && userScore.soul) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].soul !== userScore.soul) {n+=misMatchScore;}
                    if (friendData[i].christian && userScore.christian) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].christian !== userScore.christian) {n+=misMatchScore;}
                    if (friendData[i].k_pop && userScore.k_pop) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].k_pop !== userScore.k_pop) {n+=misMatchScore;}
                    if (friendData[i].arab && userScore.arab) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].arab !== userScore.arab) {n+=misMatchScore;}
                    if (friendData[i].desi && userScore.desi) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].desi !== userScore.desi) {n+=misMatchScore;}
                    if (friendData[i].afro && userScore.afro) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].afro !== userScore.afro) {n+=misMatchScore;}
                    if (friendData[i].metal && userScore.metal) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].metal !== userScore.metal) {n+=misMatchScore;}
                    if (friendData[i].regional_mexican && userScore.regional_mexican) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].regional_mexican !== userScore.regional_mexican) {n+=misMatchScore;}
                    if (friendData[i].reggae && userScore.reggae) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].reggae !== userScore.reggae) {n+=misMatchScore;}
                    if (friendData[i].blues && userScore.blues) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].blues !== userScore.blues) {n+=misMatchScore;}
                    if (friendData[i].punk && userScore.punk) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].punk !== userScore.punk) {n+=misMatchScore;}
                    if (friendData[i].funk && userScore.funk) {n+=matchScore; d+=matchScore;}
                    if (friendData[i].funk !== userScore.funk) {n+=misMatchScore;}
    
                let score = 0;
                if (d>0){
                    score=Math.round(n*100/d);
                }
                friendData[i].score=score;
            }
            friendData.sort((a,b) => {
                return b.score - a.score;
            });
    
            var largestNum = Math.max(...scoresArr)
            var indexOfLargest = scoresArr.indexOf(largestNum);
            var loveMatch = scoresArr[indexOfLargest]
            console.log(match)
            res.json(match)
          });
        

        //save match
        // connection.query("UPDATE match from timbr_user WHERE id=?", matchID, (err, data) => {
        //     //user updated
        // })
    });

    app.post("/apiRoutes/Scores/:id", (req, res) => {
        User.update(
            {
            firstName: req.body.firstName, 
            lastName: req.body.lastname, 
            photo: req.body.photo, 
            instrument: req.body.instrument,
            birthDay: req.body.birthday, 
            location: req.body.location, 
            gender: req.body.gender,
            partnerGender: req.body.partnerGender, 
            scores: req.body.scores, 
            myBio: req.body.myBio,
            }
        )
    })

    app.post("/api/clear", (req, res) => {
        // Empty out the arrays of data
        friendData.length = [];
        res.json({
            ok: true
        });
    });
};

// module.exports = matchingLogic.js;