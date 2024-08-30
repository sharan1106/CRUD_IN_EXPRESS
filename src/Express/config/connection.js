const mongoose = require ("mongoose")

const connection = () =>{
    mongoose.connect(process.env.MONGO_URL)

    .then (() => {
        console.log("Mongoode connected ....");
    })
    .catch ((err) => {
        console.log(`Connection error :${err}`);
    })
}



module.exports = connection