require('dotenv').config();
const app=require('./src/app') //Imports your Express app from ./src/app.js



app.listen(3000,()=>{
    console.log('server is running on port 3000')
})