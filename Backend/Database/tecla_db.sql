-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-04-2023 a las 22:28:39
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
-- CREATE USER 'tecla_admin'@'localhost' IDENTIFIED BY 'tecla';
-- GRANT ALL ON *.* TO 'tecla_admin';

-- prueba
-- CREATE USER 'tecla_admin'@'%' IDENTIFIED BY 'password';
-- GRANT ALL PRIVILEGES ON tecla_db.* TO 'tecla_admin'@'%';
-- FLUSH PRIVILEGES;
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
(1, 5, 1),
(1, 8, 0),
(2, 3, 0),
(2, 4, 0),
(2, 9, 1),
(3, 4, 1),
(3, 5, 0),
(3, 8, 1),
(3, 9, 1),
(4, 5, 1),
(4, 6, 0),
(4, 7, 1),
(5, 6, 1),
(5, 7, 0),
(6, 7, 1),
(6, 9, 0),
(7, 8, 1),
(7, 9, 0),
(8, 9, 1);

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
(1, 5, 1, '2023-04-25 17:05:52', 'El desarrollo de software se trata de crear algo nuevo e innovador. Es un proceso de convertir una idea en una realidad.'),
(2, 1, 3, '2023-04-25 17:05:52', 'Una empresa de desarrollo de software puede ayudarlo a crear el software personalizado que necesita para optimizar su negocio. ¡Déjanos ayud'),
(3, 15, 1, '2023-04-25 17:05:52', 'Consejos de producción de software de desarrollo: https://t.co/xnl3iNcuW7 #software #desarrollo #manager'),
(4, 1, 2, '2023-04-25 17:05:52', 'El desarrollo de software tiene que ver con la creación de aplicaciones y programas que nos hacen la vida más fácil. Desde las herramientas '),
(5, 5, 2, '2023-04-25 17:05:52', 'Desarrollo de software: más fácil de aprender de lo que piensas. Sigue estos pasos y podrás dominarlo en no time.'),
(6, 1, 4, '2023-04-25 17:05:52', '¡El software de desarrollo tiene que ver con la eficiencia y hacer las cosas!'),
(7, 12, 1, '2023-04-25 17:05:52', 'El desarrollo de software es una industria en constante evolución. Aprende las mejores prácticas para crear aplicaciones de calidad.'),
(8, 7, 4, '2023-04-25 17:05:52', 'Enamorado del desarrollo fullstack. La sensación de satisfacción cuando creas algo desde cero y lo ves funcionar es inigualable.'),
(9, 13, 5, '2023-04-25 17:05:52', 'JavaScript para el frontend, Python para el backend = desarrollo web fullstack.'),
(10, 6, 1, '2023-04-25 17:05:52', '¡Qué tal, fullstackers! ¡Es hora de obtener nuestro código y construir algo increíble!'),
(11, 7, 5, '2023-04-25 17:05:52', 'Una empresa de desarrollo de software puede ayudarlo a crear el software personalizado que necesita para optimizar su negocio. ¡Déjanos ayud'),
(12, 3, 4, '2023-04-25 17:05:52', 'El desarrollo de software tiene que ver con la creación de aplicaciones y programas que nos hacen la vida más fácil. Desde las herramientas '),
(13, 0, 6, '2023-04-25 17:05:52', 'El desarrollo de software es una industria en constante evolución. Aprende las mejores prácticas para crear aplicaciones de calidad.'),
(14, 1, 6, '2023-04-25 17:05:52', 'Una base de datos es una colección de datos a la que pueden acceder las computadoras. Se utilizan para almacenar información que va desde in'),
(15, 3, 1, '2023-04-25 17:05:52', 'Estar al día con tus bases de datos es vital para mantener tu sitio web funcionando correctamente. Aquí están algunos consejos para mantener'),
(16, 3, 5, '2023-04-25 17:05:52', '¡Feliz #DíaDelDato! ¡Hoy se trata de celebrar el poder de los datos! #BigData #DevOps #Análisis de datos'),
(17, 1, 6, '2023-04-25 17:05:52', '¡El camino a convertirse en un programador junior puede ser difícil, pero vale la pena! ¡No te rindas y sigue practicando!'),
(18, 10, 7, '2023-04-25 17:05:52', 'Soy #programadorjunior y me encanta! Es muy gratificante codificar y crear cosas que ayuden a las personas.'),
(19, 4, 8, '2023-04-25 17:05:52', '¡Estoy tan feliz de ser finalmente un programador junior! Ha sido un viaje largo pero valió la pena. #programadorjunior'),
(20, 5, 9, '2023-04-25 17:05:52', '¡Me gradué de programador junior! No puedo esperar para comenzar mi aventura en el mundo de la tecnología.'),
(21, 6, 2, '2023-04-25 17:05:52', 'Entonces, ¿quieres ser un programador junior? ¡Aquí hay algunas cosas que necesita saber!'),
(22, 10, 7, '2023-04-25 17:05:52', '¿Así que quieres ser un #programador junior? ¡Esto es lo que necesita saber! https://t.co/9afY1NcuFa'),
(23, 12, 2, '2023-04-25 17:05:52', '¡Hola, #programadoressenior! Echa un vistazo a esta posición para un ingeniero de #bigdata. ¡Tú podrías ser el candidato que estamos buscand'),
(24, 13, 7, '2023-04-25 17:05:52', '¡Un programador senior de big data gana mucho dinero! Tienen una gran demanda y pueden hacer fácilmente seis cifras.'),
(25, 12, 8, '2023-04-25 17:05:52', '¡Hay una gran demanda de programadores senior de big data! Si está buscando dar el salto a un puesto senior, ahora es el momento.'),
(26, 3, 8, '2023-04-25 17:05:52', 'Los grandes datos son un gran problema. Está cambiando la forma en que vivimos, trabajamos y pensamos.'),
(27, 0, 9, '2023-04-25 17:05:52', 'El poder de los grandes datos es increíble. Tiene la capacidad de transformar industrias enteras y la forma en que vivimos nuestras vidas.'),
(28, 8, 9, '2023-04-25 17:05:52', 'El futuro del big data está en la analítica y la inteligencia artificial.'),
(29, 5, 6, '2023-04-25 17:05:52', 'Las empresas de hoy en día deben ser capaces de gestionar de forma eficaz los macrodatos para seguir siendo competitivas. #BigData'),
(30, 3, 1, '2023-04-25 17:05:52', 'Hola chicos, si quieren convertirse en desarrolladores de software, no escuchen a nadie que les diga que es fácil. Es mucho trabajo, pero ta'),
(31, 1, 2, '2023-04-25 17:05:52', 'broma de desarrollador: ¿por qué los programadores siempre tienen que escribir código? ¡porque sin código, no habría nada que depurar!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `surname1` varchar(150) NOT NULL,
  `surname2` varchar(150) NOT NULL,
  `username` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `city` varchar(150) DEFAULT NULL,
  `country` varchar(150) DEFAULT NULL,
  `studies` varchar(150) DEFAULT NULL,
  `languages` varchar(150) DEFAULT NULL,
  `linkedin` varchar(150) DEFAULT NULL,
  `hobbies` varchar(150) DEFAULT NULL,
  `role` varchar(150) DEFAULT NULL,
  `picture` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname1`, `surname2`, `username`, `email`, `password`, `age`, `city`, `country`, `studies`, `languages`, `linkedin`, `hobbies`, `role`, `picture`) VALUES
(1, 'Sarah ', 'King', 'King', 'beautifulfrog544', 'sarah.king@example.com', 'onlyme', 34, 'Canterbury', 'United Kingdom', 'DAM', 'Ingles', 'https://appliance.example.edu/bead/basket.php', 'Musica lectura', 'Desarrallor senior', 'https://randomuser.me/api/portraits/women/25.jpg'),
(2, 'Stella ', 'Edwards', 'Edwards', 'tinycat710', 'stella.edwards@example.com', 'loretta', 32, 'Upper Hutt', 'New Zealand', 'Fullstack bootcamp', 'Ingles', 'http://www.example.net/believe/books.html?beef=brick&alarm=boot', 'Deportes', 'Desarrallor fullstack', 'https://randomuser.me/api/portraits/women/77.jpg'),
(3, 'Eline ', 'Faure', 'Faure', 'blackbutterfly301', 'eline.faure@example.com', 'pumpkin', 63, 'Aulnay-sous-Bois', 'France', 'Ingenieria informatica', 'Frances', 'http://airport.example.edu/', 'Cine', 'Arquitecto software', 'https://randomuser.me/api/portraits/women/89.jpg'),
(4, 'Pius ', 'Perrin', 'Perrin', 'brownzebra139', 'pius.perrin@example.com', 'amateurs', 76, 'Oberrieden', 'Switzerland', 'BBDD bootcamp', 'Suizo', 'http://www.example.com/blow/base.php', 'Ciclismo', 'Administrador de base de datos', 'https://randomuser.me/api/portraits/men/75.jpg'),
(5, 'Arthur ', 'Harvey', 'Harvey', 'biglion614', 'arthur.harvey@example.com', 'senior', 54, 'Bowral', 'Australia', 'Fullstack bootcamp', 'Ingles', 'https://example.com/bells/brake', 'Cocina', 'Desarrallor fullstack junior', 'https://randomuser.me/api/portraits/men/36.jpg'),
(6, 'Lada ', 'Ninković', 'Ninković', 'lazybear860', 'lada.ninkovic@example.com', 'brigitte', 29, 'Titel', 'Serbia', 'Ingenieria informatica', 'Ruso', 'https://activity.example.com/account', 'Fotografía', 'Ingeniero de software', 'https://randomuser.me/api/portraits/women/83.jpg'),
(7, 'Jens-Peter ', 'Kämpf', 'Kämpf', 'ticklishmouse502', 'jens-peter.kampf@example.com', 'thongs', 59, 'Arnstein', 'Germany', 'DAW', 'Aleman', 'https://bag.example.com/', 'Videojuegos', 'Desarrallor Web', 'https://randomuser.me/api/portraits/men/31.jpg'),
(8, 'Alfred ', 'Mortensen', 'Mortensen', 'tinyrabbit949', 'alfred.mortensen@example.com', 'change', 33, 'Viby J.', 'Denmark', 'Data Analyst', 'Danes', 'https://example.edu/afterthought', 'Viajar', 'Data analyst', 'https://randomuser.me/api/portraits/men/33.jpg'),
(9, 'Fatih ', 'Erberk', 'Erberk', 'lazybear759', 'fatih.erberk@example.com', 'aussie', 74, 'Yozgat', 'Turkey', 'DAM', 'Ingles', 'https://bell.example.org/badge/bridge.html#bait', 'Poesia', 'Desarrallor .Net ', 'https://randomuser.me/api/portraits/men/42.jpg');

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
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `password` (`password`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

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
