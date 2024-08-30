const express = require ("express");
const router = express.Router();
const gameControler = require ("../controler")



router
.route("/signup")
.post(gameControler.createUser)


router
.route("/findGame")
.get(gameControler.getGamesdetails)


router
.route("/updateDetails")
.put(gameControler.updategame)


router
.route("/DeletDetails")
.delete(gameControler.deleteGames)






module.exports = router;