const signup = require ("./model")



// create method
const createUser = async (req,res) => {
    try {
        let {GameName} = req.body;
        let checkName = await signup.findOne({GameName})
        if (checkName) {
            return res.json({
                message :"Game Data Exists..."
            })
        }

        const createGame = await signup.create(req.body);
        res.json({
            data : createGame,
            message : "Game Data Added sucessfully...."
        })
    } catch (error) {
        res.json ({
            Error : error
        })
    }
}

// get method
const getGamesdetails = async (req,res)=>{
    try {
        
        console.log(req.body);
        let {GameName} =req.query;
        let findGame = await signup.find();

        
        res.json({
            data:findGame,
            message:"Game Data Found...."
        })
    } catch (error) {
        res.json({
            Error:error
        })
    }
}


//update
const updategame = async (req,res) => {
    try {
        let {objectId} = req.query;
        const updatedetail = await signup.findByIdAndUpdate (objectId,req.body,{new:true})

        if (!updatedetail) {
            return res.status(404).json({
                message : "Game Data Not Found..."
            })
        }
        res.json({
            data : updatedetail
        })

    } catch (error) {
        Error : error
    }
}

// delet
const deleteGames = async (req, res) => {
    try {
        let {GameName} = req.query
        console.log("t", GameName);
        const findDetails = await signup.findByIdAndDelete(GameName)
        if(!findDetails) {
            return res.status(404).json({
                message: "details not found"
            })
        }

        // const deletedetail = await signup.deleteOne({GameName})

        res.json({
            data: findDetails,  
            message: "data deleted succesfully"
        })
    }
    catch (error){
        res.json({
            Error: error
        })
    }

};




module.exports = {
    createUser,
    getGamesdetails,
    updategame,
    deleteGames
}