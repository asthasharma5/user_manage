import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './route/student.js';
//const cors =require('cors');

const localDB = 'mongodb://127.0.0.1:27017/zomato_27';
const CONNECTION_URL='mongodb+srv://secondary_11:user12@cluster0.me61q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port =  5000;

const app=express();


app.use(bodyParser.json({limit:"20mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));
app.use(cors());
app.options('*',cors());
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST','DELETE','PUT');
	res.setHeader('Access-Control-Allow-Headers', 'content-type');
	next();
});

app.use('/students',studentRoutes);

mongoose.connect(CONNECTION_URL , {
    useNewUrlParser:true, useUnifiedTopology:true
})
.then(()=> app.listen(port,()=>
console.log(`Connection is establised and running on port:${port}`)
))
.catch((err)=> console.log(err.message));

//mongoose.set('useFindAndModify',false);