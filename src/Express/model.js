const mongoose = require ("mongoose")



const signupSchema = new mongoose.Schema ({

    UserName : {
        type : String,
        require : true,
    },
    Email : {
        type : String,
        require : true,
    },
    GameName : {
        type : String,
        require : true,
    },
},
{timestamps : true}
)

const signup = mongoose.model ("signup", signupSchema)

module.exports = signup;