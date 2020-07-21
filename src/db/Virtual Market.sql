-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         5.7.24 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Volcando estructura de base de datos para virtualmarketdb
CREATE DATABASE IF NOT EXISTS `virtualmarketdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `virtualmarketdb`;

-- Volcando estructura para tabla virtualmarketdb.fecha_nacimiento
CREATE TABLE IF NOT EXISTS `fecha_nacimiento` (
  `idfecha` int(11) NOT NULL AUTO_INCREMENT,
  `dia` int(11) DEFAULT NULL,
  `mes` int(11) DEFAULT NULL,
  `year` year(4) DEFAULT NULL,
  PRIMARY KEY (`idfecha`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla virtualmarketdb.pedidos
CREATE TABLE IF NOT EXISTS `pedidos` (
  `idPedido` int(11) NOT NULL AUTO_INCREMENT,
  `pedidoAdomicilio` tinyint(1) DEFAULT NULL,
  `idRepartidor` int(11) DEFAULT NULL,
  `codigoQR` varchar(50) DEFAULT NULL,
  `detalles` json DEFAULT NULL,
  `totalPedido` decimal(50,2) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `sucursalResponsable` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPedido`),
  KEY `FK_idusuario` (`user`),
  KEY `FK_idrepartidor` (`idRepartidor`),
  CONSTRAINT `FK_idrepartidor` FOREIGN KEY (`idRepartidor`) REFERENCES `repartidores` (`idRepartidor`),
  CONSTRAINT `FK_idusuario` FOREIGN KEY (`user`) REFERENCES `users` (`idUsers`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla virtualmarketdb.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `idProducto` int(11) NOT NULL,
  `imagen` varchar(50) DEFAULT NULL,
  `codigo` varchar(50) DEFAULT NULL,
  `precio` decimal(10,0) DEFAULT NULL,
  `categorias` json DEFAULT NULL,
  `promo` binary(1) DEFAULT NULL,
  `preciopromo` decimal(10,0) DEFAULT NULL,
  `inventario` int(11) DEFAULT NULL,
  `sucursal` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla virtualmarketdb.repartidores
CREATE TABLE IF NOT EXISTS `repartidores` (
  `idRepartidor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `emp_afiliada` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idRepartidor`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla virtualmarketdb.sucursal
CREATE TABLE IF NOT EXISTS `sucursal` (
  `idSucursal` int(11) NOT NULL AUTO_INCREMENT,
  `Supermercado` int(11) NOT NULL,
  `horario` varchar(50) DEFAULT NULL,
  `24Horas` tinyint(1) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `ubicacionDigital` varchar(50) DEFAULT NULL,
  `provincia` varchar(50) DEFAULT NULL,
  `corregimiento` varchar(50) DEFAULT NULL,
  `distrito` varchar(50) DEFAULT NULL,
  `barriada` varchar(50) DEFAULT NULL,
  `calle` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idSucursal`),
  KEY `FK_suoermercado` (`Supermercado`),
  CONSTRAINT `FK_suoermercado` FOREIGN KEY (`Supermercado`) REFERENCES `supermercados` (`idSupermercado`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla virtualmarketdb.supermercados
CREATE TABLE IF NOT EXISTS `supermercados` (
  `idSupermercado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `tipoafiliacion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idSupermercado`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla virtualmarketdb.ubicacion_usuario
CREATE TABLE IF NOT EXISTS `ubicacion_usuario` (
  `idUbicacion` int(11) NOT NULL AUTO_INCREMENT,
  `ubicaciondigital` varchar(100) NOT NULL,
  `provincia` varchar(50) DEFAULT NULL,
  `distrito` varchar(50) DEFAULT NULL,
  `corregimiento` varchar(50) DEFAULT NULL,
  `barriada` varchar(50) DEFAULT NULL,
  `calle` varchar(50) DEFAULT NULL,
  `ultimaActualizacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUbicacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla virtualmarketdb.users
CREATE TABLE IF NOT EXISTS `users` (
  `idUsers` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `cedula` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `celular` varchar(50) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `fechaNacimiento` int(11) DEFAULT NULL,
  `ubicacion` int(11) DEFAULT NULL,
  `creacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idUsers`),
  UNIQUE KEY `email` (`email`),
  KEY `FK_fechanacimiento` (`fechaNacimiento`),
  KEY `FK_ubicacion` (`ubicacion`),
  CONSTRAINT `FK_fechanacimiento` FOREIGN KEY (`fechaNacimiento`) REFERENCES `fecha_nacimiento` (`idfecha`) ON UPDATE CASCADE,
  CONSTRAINT `FK_ubicacion` FOREIGN KEY (`ubicacion`) REFERENCES `ubicacion_usuario` (`idUbicacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla virtualmarketdb.users_secret
CREATE TABLE IF NOT EXISTS `users_secret` (
  `idUsers` int(11) DEFAULT NULL,
  `userMail` varchar(50) NOT NULL,
  `UsersSecret` varchar(50) DEFAULT NULL,
  `recovery` varchar(50) DEFAULT NULL,
  UNIQUE KEY `userMail` (`userMail`),
  KEY `FK_iduser` (`idUsers`),
  CONSTRAINT `FK_iduser` FOREIGN KEY (`idUsers`) REFERENCES `users` (`idUsers`),
  CONSTRAINT `FK_mail` FOREIGN KEY (`userMail`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
