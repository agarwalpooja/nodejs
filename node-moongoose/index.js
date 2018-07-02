const mongoose = require('mongoose');
//mongoose.Promise = require('bluebird');
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
const Dishes = require('./models/dishes');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log("Connected to DB");
    var newDish = Dishes({
        name: 'Ukn',
        description: 'test'
    });

    newDish.save(function(err){
        if ( err ) throw err;
        console.log("dish Saved Successfully");
        Dishes.find({},function(err,dishes){
            if(err)
            console.log("error finding");
            console.log("the dishes are"+dishes)
            db.collection('dishes').drop();
            db.close();
        })
        
    });
});

