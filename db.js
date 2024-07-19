const mongoose = require('mongoose');
// Connect to MongoDB
const mongourl='mongodb://localhost:27017/hotels'
mongoose
    .connect(mongourl  );
    

const db = mongoose.connection; 

db.on('connected',()=>{
    console.log("connected");
})

db.on('error',(err)=>{
    console.log("error is",err);
})

db.on('disconnected',()=>{
    console.log("disconnected");
})

module.exports=db;
        