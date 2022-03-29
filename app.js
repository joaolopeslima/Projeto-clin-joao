const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//Routes
app.get('/', (req,res) => {
    res.send('Marcações realizadas');
});



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to DB!')
);

//server listener
app.listen(3000);