-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-04-2023 a las 16:20:33
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tecla_db`
--
CREATE DATABASE tecla_db;
USE tecla_db;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
	`post_id` int(11) NOT NULL,
	`likes` int(11) NOT NULL,
	`user_id` int(11) DEFAULT NULL,
	`publishDate` date NOT NULL,
	`content` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`post_id`, `likes`, `user_id`, `publishDate`, `content`) VALUES
(1, 5, 1, '2022-04-21', 'Contenido del comentario 1 del usuario 1'),
(2, 15, 1, '2022-02-21', 'Contenido del comentario 2 del usuario 1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
	`user_id` int(11) NOT NULL,
	`name` varchar(20) NOT NULL,
	`surname1` varchar(20) NOT NULL,
	`surname2` varchar(20) NOT NULL,
	`username` varchar(20) NOT NULL,
	`email` varchar(20) NOT NULL,
	`pass` varchar(10) NOT NULL,
	`age` int(11) DEFAULT NULL,
	`city` varchar(15) DEFAULT NULL,
	`country` varchar(15) DEFAULT NULL,
	`studies` varchar(150) DEFAULT NULL,
	`languages` varchar(50) DEFAULT NULL,
	`linkedin` varchar(25) DEFAULT NULL,
	`hobbies` varchar(50) DEFAULT NULL,
	`role` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname1`, `surname2`, `username`, `email`, `pass`, `age`, `city`, `country`, `studies`, `languages`, `linkedin`, `hobbies`, `role`) VALUES
(1, 'Manuel', 'Fernandez', 'Fernandez', 'MaFeFe', 'mimail@mail.com', 'teclaPassw', 30, 'Gijon', 'España', 'DAM DAW', 'Castellano Ingles Aleman Italiano', 'https://www.linkedin.com/', 'Ciclismo Senderismo', 'Software Developer');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
	ADD PRIMARY KEY (`post_id`),
	ADD KEY `FK_UserPost` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
	ADD PRIMARY KEY (`user_id`),
	ADD UNIQUE KEY `username` (`username`),
	ADD UNIQUE KEY `email` (`email`),
	ADD UNIQUE KEY `pass` (`pass`),
	ADD UNIQUE KEY `linkedin` (`linkedin`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
	MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
	MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
	ADD CONSTRAINT `FK_UserPost` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
