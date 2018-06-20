const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');


const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url, (err, db) => {

    assert.equal(err,null);
    var dbase = db.db("conFusion");
    console.log('Connected correctly to server');
    dboper.insertDocument(dbase, { name: "Vadonut", description: "Test"},
        "dishes", (result) => {
            console.log("Insert Document:\n", result.ops);

            dboper.findDocuments(dbase, "dishes", (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(dbase, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocuments(dbase, "dishes", (docs) => {
                            console.log("Found Updated Documents:\n", docs);
                            
                            dbase.dropCollection("dishes", (result) => {
                                console.log("Dropped Collection: ", result);

                                db.close();
                            });
                        });
                    });
            });
    });
    
    // var dbase = db.db("conFusion");
    // const collection = dbase.collection("dishes");
    // collection.insertOne({"name": "Uthappizza", "description": "test"},
    // (err, result) => {
    //     assert.equal(err,null);

    //     console.log("After Insert:\n");
    //     console.log(result.ops);

    //     collection.find({}).toArray((err, docs) => {
    //         assert.equal(err,null);
            
    //         console.log("Found:\n");
    //         console.log(docs);

    //         dbase.dropCollection("dishes", (err, result) => {
    //             assert.equal(err,null);

    //             db.close();
    //         });
    //     });
    // });


});