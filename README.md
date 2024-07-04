Base de datos, app turismo.
Codo a codo - Node js FUll Stack.

![image](https://github.com/MateoCunsolo/db_tornquist/assets/111006492/c61eece5-4a71-48bd-9f53-b69c99bd5168)


CREATE DATABASE `database-fk_turismo`;

USE `database-fk_turismo`;

CREATE TABLE `UsuariosComerciantes` (
  `idUsuarioCom` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL UNIQUE,
  `contrasenia` VARCHAR(255) NOT NULL,
  `paginaWeb` VARCHAR(255),
  `ubicacion` VARCHAR(255),
  `telefono` VARCHAR(20),
  PRIMARY KEY (`idUsuarioCom`)
);

CREATE TABLE `Clientes` (
  `idClientes` INT(11) NOT NULL AUTO_INCREMENT,
  `mail` VARCHAR(255) NOT NULL UNIQUE,
  `ciudad` VARCHAR(100),
  PRIMARY KEY (`idClientes`)
);

CREATE TABLE `Categoria` (
  `idCategoria` INT(11) NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCategoria`)
);

CREATE TABLE `Posteo` (
  `idPosteo` INT(11) NOT NULL AUTO_INCREMENT,
  `idUsuarioCom` INT(11) NOT NULL,
  `idCategoria` INT(11) NOT NULL,
  `Titulo` VARCHAR(255),
  `Descripcion` TEXT,
  `Imagen` LONGBLOB,
  PRIMARY KEY (`idPosteo`),
  FOREIGN KEY (`idUsuarioCom`) REFERENCES `UsuariosComerciantes`(`idUsuarioCom`),
  FOREIGN KEY (`idCategoria`) REFERENCES `Categoria`(`idCategoria`)
);

CREATE TABLE `Suscripciones` (
  `idSuscripciones` INT(11) NOT NULL AUTO_INCREMENT,
  `idUsuarioCom` INT(11) NOT NULL,
  `idClientes` INT(11) NOT NULL,
  PRIMARY KEY (`idSuscripciones`),
  FOREIGN KEY (`idUsuarioCom`) REFERENCES `UsuariosComerciantes`(`idUsuarioCom`),
  FOREIGN KEY (`idClientes`) REFERENCES `Clientes`(`idClientes`)
);
