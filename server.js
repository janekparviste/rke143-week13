const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const userRouter = require('./routes/users.routes')

const app = express();

app.use(bodyParser.json());

db.connect((error) => {
    if (error) {
        console.log('connnection failed.');
    } else {
        console.log('connnection initiated.');
    }
});

app.use('/user', userRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000.');
});
