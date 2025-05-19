const express=require('express'); //Imports the Express library
const aiRoutes=require('./routes/ai.routes')
const app=express() //Initializes the Express app
const cors=require('cors')
app.use(express.json()) // to parse JSON body
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello, World!')
})
app.use('/ai',aiRoutes) //Uses the aiRoutes routes for the /ai path
module.exports=app; //Exports the app object so it can be used in another file