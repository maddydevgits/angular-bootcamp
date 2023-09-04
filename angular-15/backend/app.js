const express=require('express');
const {MongoClient}=require('mongodb');
const url=require('url');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:4200', // Replace with the origin of your frontend app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and sessions to be sent cross-origin
    optionsSuccessStatus: 204, // Respond to preflight requests with a 204 status
  };
  
  

const client=new MongoClient('mongodb://127.0.0.1:27017');
var api=express();
api.use(cors(corsOptions));

api.get('/',function(req,res){
    res.send('API Server Started');
});

api.get('/register',async function(req,res){
    var urldata=url.parse(req.url,true);
    var username=urldata.query.username;
    var password=urldata.query.password;

    await client.connect();
    const db=client.db('registerdata');
    const collection=db.collection('register');

    mquery={'username':username};

    result=await collection.find(mquery).toArray();
    console.log(result);
    if(result.length>0){
        return res.json({'message':'Already Registered'});
    } 
    response=await collection.insertOne({'username':username,'password':password});
    return res.json({'message':'Registration Successful'});
});

api.listen(2000,function(){
    console.log('API Server Started');
})