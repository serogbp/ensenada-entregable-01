-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-05-2023 a las 23:22:37
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friends`
--

CREATE TABLE IF NOT EXISTS `friends` (
  `sender_id` int(11) NOT NULL,
  `receptor_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0 CHECK (`sender_id` <> `receptor_id`),
  PRIMARY KEY (`sender_id`,`receptor_id`),
  KEY `FK_receptor` (`receptor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `friends`
--

INSERT INTO `friends` (`sender_id`, `receptor_id`, `status`) VALUES
(1, 2, 0),
(1, 3, 0),
(1, 5, 1),
(1, 8, 0),
(2, 3, 0),
(2, 4, 0),
(2, 9, 1),
(3, 4, 1),
(3, 5, 0),
(3, 8, 1),
(3, 9, 1),
(4, 3, 1),
(4, 5, 1),
(4, 6, 0),
(4, 7, 1),
(5, 1, 1),
(5, 4, 1),
(5, 6, 1),
(5, 7, 0),
(6, 5, 1),
(6, 7, 1),
(6, 9, 0),
(7, 4, 1),
(7, 6, 1),
(7, 8, 1),
(7, 9, 0),
(8, 3, 1),
(8, 7, 1),
(8, 9, 1),
(9, 2, 1),
(9, 3, 1),
(9, 8, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `content` varchar(280) NOT NULL,
  `publishDate` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`post_id`),
  KEY `FK_UserPost` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `content`, `publishDate`) VALUES
(1, 1, 'El desarrollo de software se trata de crear algo nuevo e innovador. Es un proceso de convertir una idea en una realidad.', '2023-05-22 21:16:01'),
(2, 3, 'Una empresa de desarrollo de software puede ayudarlo a crear el software personalizado que necesita para optimizar su negocio. ¡Déjanos ayudarte con tu próximo proyecto!', '2023-05-22 21:16:01'),
(3, 1, 'Consejos de producción de software de desarrollo: https://t.co/xnl3iNcuW7 #software #desarrollo #manager', '2023-05-22 21:16:01'),
(4, 2, 'El desarrollo de software tiene que ver con la creación de aplicaciones y programas que nos hacen la vida más fácil. Desde las herramientas más simples hasta los sistemas más complejos, el desarrollo de software es una parte vital para mantener el mundo en funcionamiento.', '2023-05-22 21:16:01'),
(5, 2, 'Desarrollo de software: más fácil de aprender de lo que piensas. Sigue estos pasos y podrás dominarlo en no time.', '2023-05-22 21:16:01'),
(6, 4, '¡El software de desarrollo tiene que ver con la eficiencia y hacer las cosas!', '2023-05-22 21:16:01'),
(7, 1, 'El desarrollo de software es una industria en constante evolución. Aprende las mejores prácticas para crear aplicaciones de calidad.', '2023-05-22 21:16:01'),
(8, 4, 'Enamorado del desarrollo fullstack. La sensación de satisfacción cuando creas algo desde cero y lo ves funcionar es inigualable.', '2023-05-22 21:16:01'),
(9, 5, 'JavaScript para el frontend, Python para el backend = desarrollo web fullstack.', '2023-05-22 21:16:01'),
(10, 1, '¡Qué tal, fullstackers! ¡Es hora de obtener nuestro código y construir algo increíble!', '2023-05-22 21:16:01'),
(11, 5, 'Una empresa de desarrollo de software puede ayudarlo a crear el software personalizado que necesita para optimizar su negocio. ¡Déjanos ayudarte con tu próximo proyecto!', '2023-05-22 21:16:01'),
(12, 4, 'El desarrollo de software tiene que ver con la creación de aplicaciones y programas que nos hacen la vida más fácil. Desde las herramientas más simples hasta los sistemas más complejos, el desarrollo de software es una parte vital para mantener el mundo en funcionamiento.', '2023-05-22 21:16:01'),
(13, 6, 'El desarrollo de software es una industria en constante evolución. Aprende las mejores prácticas para crear aplicaciones de calidad.', '2023-05-22 21:16:01'),
(14, 6, 'Una base de datos es una colección de datos a la que pueden acceder las computadoras. Se utilizan para almacenar información que va desde información personal hasta registros financieros.', '2023-05-22 21:16:01'),
(15, 1, 'Estar al día con tus bases de datos es vital para mantener tu sitio web funcionando correctamente. Aquí están algunos consejos para mantener tu base de datos en buena forma. #databases #webdevelopment', '2023-05-22 21:16:01'),
(16, 5, '¡Feliz #DíaDelDato! ¡Hoy se trata de celebrar el poder de los datos! #BigData #DevOps #Análisis de datos', '2023-05-22 21:16:01'),
(17, 6, '¡El camino a convertirse en un programador junior puede ser difícil, pero vale la pena! ¡No te rindas y sigue practicando!', '2023-05-22 21:16:01'),
(18, 7, 'Soy #programadorjunior y me encanta! Es muy gratificante codificar y crear cosas que ayuden a las personas.', '2023-05-22 21:16:01'),
(19, 8, '¡Estoy tan feliz de ser finalmente un programador junior! Ha sido un viaje largo pero valió la pena. #programadorjunior', '2023-05-22 21:16:01'),
(20, 9, '¡Me gradué de programador junior! No puedo esperar para comenzar mi aventura en el mundo de la tecnología.', '2023-05-22 21:16:01'),
(21, 2, 'Entonces, ¿quieres ser un programador junior? ¡Aquí hay algunas cosas que necesita saber!', '2023-05-22 21:16:01'),
(22, 7, '¿Así que quieres ser un #programador junior? ¡Esto es lo que necesita saber! https://t.co/9afY1NcuFa', '2023-05-22 21:16:01'),
(23, 2, '¡Hola, #programadoressenior! Echa un vistazo a esta posición para un ingeniero de #bigdata. ¡Tú podrías ser el candidato que estamos buscando!', '2023-05-22 21:16:01'),
(24, 7, '¡Un programador senior de big data gana mucho dinero! Tienen una gran demanda y pueden hacer fácilmente seis cifras.', '2023-05-22 21:16:01'),
(25, 8, '¡Hay una gran demanda de programadores senior de big data! Si está buscando dar el salto a un puesto senior, ahora es el momento.', '2023-05-22 21:16:01'),
(26, 8, 'Los grandes datos son un gran problema. Está cambiando la forma en que vivimos, trabajamos y pensamos.', '2023-05-22 21:16:01'),
(27, 9, 'El poder de los grandes datos es increíble. Tiene la capacidad de transformar industrias enteras y la forma en que vivimos nuestras vidas.', '2023-05-22 21:16:01'),
(28, 9, 'El futuro del big data está en la analítica y la inteligencia artificial.', '2023-05-22 21:16:01'),
(29, 6, 'Las empresas de hoy en día deben ser capaces de gestionar de forma eficaz los macrodatos para seguir siendo competitivas. #BigData', '2023-05-22 21:16:01'),
(30, 1, 'Hola chicos, si quieren convertirse en desarrolladores de software, no escuchen a nadie que les diga que es fácil. Es mucho trabajo, pero también es muy divertido.', '2023-05-22 21:16:01'),
(31, 2, 'broma de desarrollador: ¿por qué los programadores siempre tienen que escribir código? ¡porque sin código, no habría nada que depurar!', '2023-05-22 21:16:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reactions`
--

CREATE TABLE IF NOT EXISTS `reactions` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`post_id`,`user_id`),
  KEY `FK_User` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reactions`
--

INSERT INTO `reactions` (`post_id`, `user_id`) VALUES
(1, 5),
(2, 4),
(11, 4),
(20, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recomendations`
--

CREATE TABLE IF NOT EXISTS `recomendations` (
  `content` varchar(280) NOT NULL,
  `giver_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  PRIMARY KEY (`giver_id`,`receiver_id`),
  KEY `FK_receiver` (`receiver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `surname1` varchar(150) NOT NULL,
  `surname2` varchar(150) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `city` varchar(150) DEFAULT NULL,
  `country` varchar(150) DEFAULT NULL,
  `studies` varchar(150) DEFAULT NULL,
  `languages` varchar(150) DEFAULT NULL,
  `linkedin` varchar(150) DEFAULT NULL,
  `hobbies` varchar(150) DEFAULT NULL,
  `role` varchar(150) DEFAULT NULL,
  `picture` varchar(500) DEFAULT NULL,
  `userType` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname1`, `surname2`, `username`, `email`, `password`, `age`, `city`, `country`, `studies`, `languages`, `linkedin`, `hobbies`, `role`, `picture`, `userType`) VALUES
(1, 'Sarah ', 'King', 'King', 'beautifulfrog544', 'sarah.king@example.com', '$2b$10$P3EmK7bfUwxQ9Eiqc0OkTuWpPeF0yJrjcGmaOCQuFN8KQb4zrGMVC', 34, 'Canterbury', 'United Kingdom', 'DAM', 'Ingles', 'https://appliance.example.edu/bead/basket.php', 'Musica lectura', 'Desarrallor senior', 'https://randomuser.me/api/portraits/women/25.jpg', 0),
(2, 'Stella ', 'Edwards', 'Edwards', 'tinycat710', 'stella.edwards@example.com', '$2b$10$YgSe5NUMSbf9gndTQCLLReQq1GWcrTi9UloRdpzuE.g.8C5uQFvCu', 32, 'Upper Hutt', 'New Zealand', 'Fullstack bootcamp', 'Ingles', 'http://www.example.net/believe/books.html?beef=brick&alarm=boot', 'Deportes', 'Desarrallor fullstack', 'https://randomuser.me/api/portraits/women/77.jpg', 0),
(3, 'Eline ', 'Faure', 'Faure', 'blackbutterfly301', 'eline.faure@example.com', '$2b$10$MZidLVvEhVVQnPL9gQeP8udwrvcmLq5xjy55szbBf6KKEDoXjRdGa', 63, 'Aulnay-sous-Bois', 'France', 'Ingenieria informatica', 'Frances', 'http://airport.example.edu/', 'Cine', 'Arquitecto software', 'https://randomuser.me/api/portraits/women/89.jpg', 0),
(4, 'Pius ', 'Perrin', 'Perrin', 'brownzebra139', 'pius.perrin@example.com', '$2b$10$7KbdSi3y4.zCDCZE8ljJG.hiFBsIKDHQJ82EPbKJaWTfr/rykStNy', 76, 'Oberrieden', 'Switzerland', 'BBDD bootcamp', 'Suizo', 'http://www.example.com/blow/base.php', 'Ciclismo', 'Administrador de base de datos', 'https://randomuser.me/api/portraits/men/75.jpg', 0),
(5, 'Arthur ', 'Harvey', 'Harvey', 'biglion614', 'arthur.harvey@example.com', '$2b$10$dMPkmdDnuZNkDXlYk1D7Bel6AimDdkwdz7T/.bGf5WuAMwJn/AMei', 54, 'Bowral', 'Australia', 'Fullstack bootcamp', 'Ingles', 'https://example.com/bells/brake', 'Cocina', 'Desarrallor fullstack junior', 'https://randomuser.me/api/portraits/men/36.jpg', 0),
(6, 'Lada ', 'Ninković', 'Ninković', 'lazybear860', 'lada.ninkovic@example.com', '$2b$10$979/dvbE4FO3lWqxbLRYrO3pEjGQV8oOFxBDL1pUCuzRbqBtsoRni', 29, 'Titel', 'Serbia', 'Ingenieria informatica', 'Ruso', 'https://activity.example.com/account', 'Fotografía', 'Ingeniero de software', 'https://randomuser.me/api/portraits/women/83.jpg', 0),
(7, 'Jens-Peter ', 'Kämpf', 'Kämpf', 'ticklishmouse502', 'jens-peter.kampf@example.com', '$2b$10$qJcUc/a7krzKr5EScDGW/.njuLyYQM7dsxIaDBbPFatf392n4NasG', 59, 'Arnstein', 'Germany', 'DAW', 'Aleman', 'https://bag.example.com/', 'Videojuegos', 'Desarrallor Web', 'https://randomuser.me/api/portraits/men/31.jpg', 0),
(8, 'Alfred ', 'Mortensen', 'Mortensen', 'tinyrabbit949', 'alfred.mortensen@example.com', '$2b$10$UBQWiKPdMNm5V8HtYKQ9nufcYtV1xfUyRjLCTdgvi0s/d5Jqqrmnu', 33, 'Viby J.', 'Denmark', 'Data Analyst', 'Danes', 'https://example.edu/afterthought', 'Viajar', 'Data analyst', 'https://randomuser.me/api/portraits/men/33.jpg', 0),
(9, 'Fatih ', 'Erberk', 'Erberk', 'lazybear759', 'fatih.erberk@example.com', '$2b$10$0NxUckHynyxTq50LWcfOveV2PYcENaRyThxieIgnSXfWf0ZV94gBm', 74, 'Yozgat', 'Turkey', 'DAM', 'Ingles', 'https://bell.example.org/badge/bridge.html#bait', 'Poesia', 'Desarrallor .Net ', 'https://randomuser.me/api/portraits/men/42.jpg', 0);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `friends`
--
ALTER TABLE `friends`
  ADD CONSTRAINT `FK_receptor` FOREIGN KEY (`receptor_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_sender` FOREIGN KEY (`sender_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_UserPost` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reactions`
--
ALTER TABLE `reactions`
  ADD CONSTRAINT `FK_Post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`),
  ADD CONSTRAINT `FK_User` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Filtros para la tabla `recomendations`
--
ALTER TABLE `recomendations`
  ADD CONSTRAINT `FK_giver` FOREIGN KEY (`giver_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `FK_receiver` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
