const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const hostname = '127.0.0.1';
const port = 3000;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

// Home page route.
router.get('/', function (req, res) {
    res.send('Jediva home page')
})

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
  });
  
  router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
  });
  
  //add the router
  app.use('/', router);
  app.listen(process.env.port || 3000);
  
  console.log('Running at Port 3000');