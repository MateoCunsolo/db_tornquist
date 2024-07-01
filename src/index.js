require('dotenv').config();//levanta las variables de entorno
const express = require('express');
const multer = require('multer');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuración de multer
const upload = multer();
app.use(upload.none()); 

// Routes
app.use(require('./routes/all.routes'));
app.use("/login",require('./routes/auth.router'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
