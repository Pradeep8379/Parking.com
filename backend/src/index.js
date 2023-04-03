const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const Route = require('./routes/route.js');

app.use(express.json());
app.use(cors());

mongoose.connect('',
    { useNewUrlParser: true }
).then(() => {
    console.log("MongoDb is connected");
    const fetched_data = mongoose.connection.db.collection('signup');
    fetched_data.find({}).toArray((err, data) => {
        if (err) {
            console.log(err);
        } else {
            global.signup = data;
            console.log(global.signup);
        }
    });

})
.catch((err) => console.log(err));



 
app.use('/', Route);

app.listen(process.env.PORT || 4000, function () {
    console.log(`Express app is running on port ` + (process.env.PORT || 4000))
})

