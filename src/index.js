const express = require('express');
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use(require('./routes/all.routes'));


const PORT = process.env.PORT || 3001;
app.listen(PORT);