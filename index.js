const express = require('express');
const connection=require('./config/db')
const userRouter = require('./routes/user.route');
const authentication = require('./middleware/authentication');
const productRouter = require('./routes/product.route');
const dotenv = require('dotenv');
dotenv.config();

const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Apple is cutting')
});

app.use('/api', userRouter)
app.use(authentication)
app.use('/api',productRouter)


const PORT=process.env.PORT;
app.listen(PORT,async()=>{
    try {
        await connection()
        console.log(`${PORT}`)
    } catch (error) {
        console.log('failed to conect')
    }
})