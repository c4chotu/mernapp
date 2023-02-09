const mongoose=require('mongoose');
mongoose.set("strictQuery", false);
const mongoURI="mongodb://127.0.0.1:27017/merns";
async function connectToMongo(){
     await mongoose.connect(mongoURI,()=>{
         console.log("connected to mongo sucessfully");
    })
}
module.exports =connectToMongo; 