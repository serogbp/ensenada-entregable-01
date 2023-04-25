-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-04-2023 a las 11:59:28
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
CREATE DATABASE IF NOT EXISTS `tecla_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tecla_db`;

--
-- Usuarios: `tecla_admin`
--
CREATE USER 'tecla_admin'@'localhost' IDENTIFIED BY 'tecla';
GRANT ALL ON tecla_db TO 'tecla_admin';
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friends`
--

CREATE TABLE `friends` (
  `sender_id` int(11) NOT NULL,
  `receptor_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0 CHECK (`sender_id` <> `receptor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `friends`
--

INSERT INTO `friends` (`sender_id`, `receptor_id`, `status`) VALUES
(1, 2, 0),
(1, 3, 0),
(3, 5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `publishDate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `content` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`post_id`, `likes`, `user_id`, `publishDate`, `content`) VALUES
(1, 5, 1, '2023-04-25 09:56:48', 'Contenido del comentario 1 del usuario 1'),
(2, 15, 1, '2023-04-25 09:56:48', 'Contenido del comentario 2 del usuario 1');

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
  `password` varchar(10) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `city` varchar(15) DEFAULT NULL,
  `country` varchar(15) DEFAULT NULL,
  `studies` varchar(150) DEFAULT NULL,
  `languages` varchar(50) DEFAULT NULL,
  `linkedin` varchar(25) DEFAULT NULL,
  `hobbies` varchar(50) DEFAULT NULL,
  `role` varchar(25) DEFAULT NULL,
  `picture` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname1`, `surname2`, `username`, `email`, `password`, `age`, `city`, `country`, `studies`, `languages`, `linkedin`, `hobbies`, `role`, `picture`) VALUES
(1, 'Sarah ', 'King', 'King', 'beautifulfrog544', 'sarah.king@example.c', 'onlyme', 34, 'Canterbury', 'United Kingdom', 'no se', 'GB', 'beautifulfrog544', 'no se', 'no se', 'https://randomuser.me/api/portraits/women/25.jpg'),
(2, 'Stella ', 'Edwards', 'Edwards', 'tinycat710', 'stella.edwards@examp', 'loretta', 32, 'Upper Hutt', 'New Zealand', 'no se', 'NZ', 'tinycat710', 'no se', 'no se', 'https://randomuser.me/api/portraits/women/77.jpg'),
(3, 'Eline ', 'Faure', 'Faure', 'blackbutterfly301', 'eline.faure@example.', 'pumpkin', 63, 'Aulnay-sous-Boi', 'France', 'no se', 'FR', 'blackbutterfly301', 'no se', 'no se', 'https://randomuser.me/api/portraits/women/89.jpg'),
(4, 'Pius ', 'Perrin', 'Perrin', 'brownzebra139', 'pius.perrin@example.', 'amateurs', 76, 'Oberrieden', 'Switzerland', 'no se', 'CH', 'brownzebra139', 'no se', 'no se', 'https://randomuser.me/api/portraits/men/75.jpg'),
(5, 'Arthur ', 'Harvey', 'Harvey', 'biglion614', 'arthur.harvey@exampl', 'senior', 54, 'Bowral', 'Australia', 'no se', 'AU', 'biglion614', 'no se', 'no se', 'https://randomuser.me/api/portraits/men/36.jpg'),
(6, 'Lada ', 'Ninković', 'Ninković', 'lazybear860', 'lada.ninkovic@exampl', 'brigitte', 29, 'Titel', 'Serbia', 'no se', 'RS', 'lazybear860', 'no se', 'no se', 'https://randomuser.me/api/portraits/women/83.jpg'),
(7, 'Jens-Peter ', 'Kämpf', 'Kämpf', 'ticklishmouse502', 'jens-peter.kampf@exa', 'thongs', 59, 'Arnstein', 'Germany', 'no se', 'DE', 'ticklishmouse502', 'no se', 'no se', 'https://randomuser.me/api/portraits/men/31.jpg'),
(8, 'Alfred ', 'Mortensen', 'Mortensen', 'tinyrabbit949', 'alfred.mortensen@exa', 'change', 33, 'Viby J.', 'Denmark', 'no se', 'DK', 'tinyrabbit949', 'no se', 'no se', 'https://randomuser.me/api/portraits/men/33.jpg'),
(9, 'Fatih ', 'Erberk', 'Erberk', 'lazybear759', 'fatih.erberk@example', 'aussie', 74, 'Yozgat', 'Turkey', 'no se', 'TR', 'lazybear759', 'no se', 'no se', 'https://randomuser.me/api/portraits/men/42.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`sender_id`,`receptor_id`),
  ADD KEY `FK_receiver` (`receptor_id`);

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
  ADD PRIMARY KEY (`user_id`);

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
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `FK_receiver` FOREIGN KEY (`receptor_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_sender` FOREIGN KEY (`sender_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_UserPost` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
