const mongoose=require('mongoose')
const connectionString=process.env.DB_Connection_String
mongoose.connect(connectionString).then(()=>{
    console.log("MonogoDB Atlas Connected with PFserver");
}
).catch((err)=>{
    console.log("MongoDB connection failed!!!",err);
})