const express = require('express');
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes - cada ruta maneja una entidad diferente de la base de datos
app.use(require('./routes/comerciantes.routes'));
app.use(require('./routes/index.routes'));


const PORT = process.env.PORT || 3001;
app.listen(PORT);