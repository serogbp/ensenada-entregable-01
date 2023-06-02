-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2023 a las 22:07:03
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
(1, 16, 1),
(2, 3, 0),
(2, 4, 0),
(2, 9, 1),
(2, 10, 0),
(2, 15, 1),
(2, 17, 0),
(3, 4, 1),
(3, 5, 0),
(3, 8, 1),
(3, 9, 1),
(3, 11, 1),
(3, 16, 1),
(3, 17, 0),
(4, 3, 1),
(4, 5, 1),
(4, 6, 0),
(4, 7, 1),
(4, 12, 1),
(4, 13, 1),
(4, 15, 1),
(4, 19, 0),
(4, 20, 1),
(5, 1, 1),
(5, 4, 1),
(5, 6, 1),
(5, 7, 0),
(5, 10, 1),
(5, 12, 1),
(5, 15, 0),
(5, 19, 0),
(6, 5, 1),
(6, 7, 1),
(6, 9, 0),
(6, 12, 1),
(6, 14, 1),
(6, 18, 1),
(7, 1, 0),
(7, 4, 1),
(7, 6, 1),
(7, 8, 1),
(7, 9, 0),
(7, 10, 1),
(7, 12, 0),
(7, 14, 1),
(7, 20, 1),
(7, 21, 0),
(8, 3, 1),
(8, 7, 1),
(8, 9, 1),
(8, 12, 1),
(8, 14, 1),
(8, 18, 1),
(9, 2, 1),
(9, 3, 1),
(9, 8, 1),
(9, 11, 1),
(9, 13, 1),
(9, 15, 1),
(10, 5, 1),
(10, 7, 1),
(10, 12, 1),
(10, 14, 1),
(10, 16, 1),
(11, 3, 1),
(11, 9, 1),
(12, 1, 0),
(12, 4, 1),
(12, 5, 1),
(12, 6, 1),
(12, 8, 1),
(12, 10, 1),
(12, 13, 0),
(12, 14, 0),
(12, 15, 0),
(12, 17, 0),
(12, 20, 0),
(13, 4, 1),
(13, 9, 1),
(14, 1, 0),
(14, 5, 0),
(14, 6, 1),
(14, 7, 1),
(14, 8, 1),
(14, 10, 1),
(14, 11, 0),
(14, 15, 0),
(15, 2, 1),
(15, 4, 1),
(15, 9, 1),
(16, 1, 1),
(16, 3, 1),
(16, 4, 0),
(16, 5, 0),
(16, 9, 0),
(16, 10, 1),
(16, 14, 0),
(16, 18, 0),
(16, 20, 0),
(18, 3, 0),
(18, 6, 1),
(18, 8, 1),
(18, 9, 0),
(18, 11, 0),
(18, 17, 0),
(18, 21, 0),
(20, 3, 0),
(20, 4, 1),
(20, 6, 0),
(20, 7, 1),
(20, 11, 0),
(20, 13, 0),
(20, 21, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `content` varchar(280) NOT NULL,
  `publishDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `content`, `publishDate`) VALUES
(1, 1, 'El desarrollo de software se trata de crear algo nuevo e innovador. Es un proceso de convertir una idea en una realidad.', '2023-05-30 21:32:01'),
(2, 3, 'Una empresa de desarrollo de software puede ayudarlo a crear el software personalizado que necesita para optimizar su negocio. ¡Déjanos ayudarte con tu próximo proyecto!', '2023-05-30 21:32:01'),
(3, 1, 'Consejos de producción de software de desarrollo: https://t.co/xnl3iNcuW7 #software #desarrollo #manager', '2023-05-30 21:32:01'),
(4, 2, 'El desarrollo de software tiene que ver con la creación de aplicaciones y programas que nos hacen la vida más fácil. Desde las herramientas más simples hasta los sistemas más complejos, el desarrollo de software es una parte vital para mantener el mundo en funcionamiento.', '2023-05-30 21:32:01'),
(5, 2, 'Desarrollo de software: más fácil de aprender de lo que piensas. Sigue estos pasos y podrás dominarlo en no time.', '2023-05-30 21:32:01'),
(6, 4, '¡El software de desarrollo tiene que ver con la eficiencia y hacer las cosas!', '2023-05-30 21:32:01'),
(7, 1, 'El desarrollo de software es una industria en constante evolución. Aprende las mejores prácticas para crear aplicaciones de calidad.', '2023-05-30 21:32:01'),
(8, 4, 'Enamorado del desarrollo fullstack. La sensación de satisfacción cuando creas algo desde cero y lo ves funcionar es inigualable.', '2023-05-30 21:32:01'),
(9, 5, 'JavaScript para el frontend, Python para el backend = desarrollo web fullstack.', '2023-05-30 21:32:01'),
(10, 1, '¡Qué tal, fullstackers! ¡Es hora de obtener nuestro código y construir algo increíble!', '2023-05-30 21:32:01'),
(11, 5, 'Una empresa de desarrollo de software puede ayudarlo a crear el software personalizado que necesita para optimizar su negocio. ¡Déjanos ayudarte con tu próximo proyecto!', '2023-05-30 21:32:01'),
(12, 4, 'El desarrollo de software tiene que ver con la creación de aplicaciones y programas que nos hacen la vida más fácil. Desde las herramientas más simples hasta los sistemas más complejos, el desarrollo de software es una parte vital para mantener el mundo en funcionamiento.', '2023-05-30 21:32:01'),
(13, 6, 'El desarrollo de software es una industria en constante evolución. Aprende las mejores prácticas para crear aplicaciones de calidad.', '2023-05-30 21:32:01'),
(14, 6, 'Una base de datos es una colección de datos a la que pueden acceder las computadoras. Se utilizan para almacenar información que va desde información personal hasta registros financieros.', '2023-05-30 21:32:01'),
(15, 1, 'Estar al día con tus bases de datos es vital para mantener tu sitio web funcionando correctamente. Aquí están algunos consejos para mantener tu base de datos en buena forma. #databases #webdevelopment', '2023-05-30 21:32:01'),
(16, 5, '¡Feliz #DíaDelDato! ¡Hoy se trata de celebrar el poder de los datos! #BigData #DevOps #Análisis de datos', '2023-05-30 21:32:01'),
(17, 6, '¡El camino a convertirse en un programador junior puede ser difícil, pero vale la pena! ¡No te rindas y sigue practicando!', '2023-05-30 21:32:01'),
(18, 7, 'Soy #programadorjunior y me encanta! Es muy gratificante codificar y crear cosas que ayuden a las personas.', '2023-05-30 21:32:01'),
(19, 8, '¡Estoy tan feliz de ser finalmente un programador junior! Ha sido un viaje largo pero valió la pena. #programadorjunior', '2023-05-30 21:32:01'),
(20, 9, '¡Me gradué de programador junior! No puedo esperar para comenzar mi aventura en el mundo de la tecnología.', '2023-05-30 21:32:01'),
(21, 2, 'Entonces, ¿quieres ser un programador junior? ¡Aquí hay algunas cosas que necesita saber!', '2023-05-30 21:32:01'),
(22, 7, '¿Así que quieres ser un #programador junior? ¡Esto es lo que necesita saber! https://t.co/9afY1NcuFa', '2023-05-30 21:32:01'),
(23, 2, '¡Hola, #programadoressenior! Echa un vistazo a esta posición para un ingeniero de #bigdata. ¡Tú podrías ser el candidato que estamos buscando!', '2023-05-30 21:32:01'),
(24, 7, '¡Un programador senior de big data gana mucho dinero! Tienen una gran demanda y pueden hacer fácilmente seis cifras.', '2023-05-30 21:32:01'),
(25, 8, '¡Hay una gran demanda de programadores senior de big data! Si está buscando dar el salto a un puesto senior, ahora es el momento.', '2023-05-30 21:32:01'),
(26, 8, 'Los grandes datos son un gran problema. Está cambiando la forma en que vivimos, trabajamos y pensamos.', '2023-05-30 21:32:01'),
(27, 9, 'El poder de los grandes datos es increíble. Tiene la capacidad de transformar industrias enteras y la forma en que vivimos nuestras vidas.', '2023-05-30 21:32:01'),
(28, 9, 'El futuro del big data está en la analítica y la inteligencia artificial.', '2023-05-30 21:32:01'),
(29, 6, 'Las empresas de hoy en día deben ser capaces de gestionar de forma eficaz los macrodatos para seguir siendo competitivas. #BigData', '2023-05-30 21:32:01'),
(30, 1, 'Hola chicos, si quieren convertirse en desarrolladores de software, no escuchen a nadie que les diga que es fácil. Es mucho trabajo, pero también es muy divertido.', '2023-05-30 21:32:01'),
(31, 2, 'broma de desarrollador: ¿por qué los programadores siempre tienen que escribir código? ¡porque sin código, no habría nada que depurar!', '2023-05-30 21:32:01'),
(32, 10, 'La programación es como un arte, donde los algoritmos son nuestras pinceladas. #Programación #ArteDigital', '2023-05-30 21:32:01'),
(33, 10, 'El código bien documentado es un regalo que te haces a ti mismo y a tus compañeros de desarrollo. #BuenaPráctica #Programación', '2023-05-30 21:32:01'),
(34, 11, 'Cuando un error te desafía, no te rindas. Lucha hasta encontrar la solución y aprender en el proceso. #Desarrollo #Programación', '2023-05-30 21:32:01'),
(35, 11, 'El poder de la programación radica en la capacidad de automatizar tareas repetitivas y liberar nuestra creatividad. #Automatización #Creatividad', '2023-05-30 21:32:01'),
(36, 12, '¡Hola, mundo! Así es como todos empezamos nuestra aventura en el mundo de la programación. #HolaMundo #Aventura', '2023-05-30 21:32:01'),
(37, 12, 'El refactoring es el arte de mejorar el código existente sin cambiar su funcionalidad. Un paso importante hacia la calidad. #Refactoring #Calidad', '2023-05-30 21:32:01'),
(38, 12, 'La programación no solo es para expertos. Todos podemos aprender a codificar y expandir nuestras habilidades. #Aprender #Programación', '2023-05-30 21:32:01'),
(39, 13, 'Un programador sin café es como un diseñador sin su herramienta principal. #Café #Productividad', '2023-05-30 21:32:01'),
(40, 13, 'El pensamiento lógico es clave en el desarrollo de software. Aprender a resolver problemas es fundamental. #Lógica #DesarrolloDeSoftware', '2023-05-30 21:32:01'),
(41, 13, 'El trabajo en equipo en programación puede ser desafiante, pero los resultados suelen ser extraordinarios. #TrabajoEnEquipo #Desarrollo', '2023-05-30 21:32:01'),
(42, 14, 'La programación es como un puzzle gigante, donde cada línea de código encaja perfectamente en su lugar. #Puzzle #Código', '2023-05-30 21:32:01'),
(43, 14, 'El mundo de la programación está en constante evolución. Estar al día con las últimas tendencias es esencial. #Evolución #Tendencias', '2023-05-30 21:32:01'),
(44, 14, 'La paciencia y la persistencia son virtudes indispensables en el desarrollo de software. #Paciencia #Persistencia', '2023-05-30 21:32:01'),
(45, 15, 'El debugging es como buscar una aguja en un pajar, pero al final la recompensa es un código libre de errores. #Debugging #Código', '2023-05-30 21:32:01'),
(46, 15, 'La modularidad es una de las bases de un código mantenible y escalable. Divide y conquistarás. #Modularidad #Mantenibilidad', '2023-05-30 21:32:01'),
(47, 15, 'La programación no se trata solo de escribir código, sino de resolver problemas de manera eficiente. #ResoluciónDeProblemas #Eficiencia', '2023-05-30 21:32:01'),
(48, 16, 'El aprendizaje continuo es fundamental en el campo de la programación. Nunca dejes de explorar y expandir tus conocimientos. #AprendizajeContinuo #Conocimientos', '2023-05-30 21:32:01'),
(49, 16, 'La simplicidad es la máxima sofisticación en el mundo del código. Mantén tus soluciones simples y elegantes. #Simplicidad #Elegancia', '2023-05-30 21:32:01'),
(50, 16, 'El versionado de código es como una línea de tiempo que registra el progreso de tu proyecto. #Versionado #Progreso', '2023-05-30 21:32:01'),
(51, 17, 'La seguridad informática es un aspecto crucial en el desarrollo de aplicaciones. Protege tus datos y los de tus usuarios. #SeguridadInformática #ProtecciónDeDatos', '2023-05-30 21:32:01'),
(52, 17, 'La programación es un lenguaje universal que trasciende barreras y une a personas de diferentes culturas. #LenguajeUniversal #Unión', '2023-05-30 21:32:01'),
(53, 17, 'El software nunca está realmente terminado, siempre hay margen para mejoras y actualizaciones. #Mejoras #Actualizaciones', '2023-05-30 21:32:01'),
(54, 18, 'El debugging es como una investigación detectivesca, siguiendo las pistas para resolver el misterio de los errores. #Investigación #Debugging', '2023-05-30 21:32:01'),
(55, 18, 'Los comentarios en el código son como pequeñas notas que dejan rastros de sabiduría para futuros programadores. #Comentarios #RastrosDeSabiduría', '2023-05-30 21:32:01'),
(56, 18, 'La programación orientada a objetos nos permite modelar el mundo real en código. #POO #Modelado', '2023-05-30 21:32:01'),
(57, 19, 'La optimización del código no es solo una cuestión de velocidad, sino también de eficiencia y legibilidad. #Optimización #Eficiencia', '2023-05-30 21:32:01'),
(58, 19, 'Los frameworks son como cajas de herramientas que nos facilitan el desarrollo de aplicaciones. #Frameworks #Desarrollo', '2023-05-30 21:32:01'),
(59, 20, 'La programación funcional nos enseña a pensar en términos de funciones y composición. Un paradigma poderoso. #ProgramaciónFuncional #Paradigma', '2023-05-30 21:32:01'),
(60, 20, 'La resolución de errores es una oportunidad para aprender y crecer como programador. ¡No temas a los errores! #Errores #Aprendizaje', '2023-05-30 21:32:01'),
(61, 20, 'El trabajo en equipo en programación implica comunicación, colaboración y empatía. Juntos logramos más. #TrabajoEnEquipo #Colaboración', '2023-05-30 21:32:01'),
(62, 21, 'La programación es como un rompecabezas: cada línea de código encaja perfectamente para resolver el problema. #Programación #Desarrollo', '2023-05-30 21:32:01'),
(63, 21, '¡Los programadores son los magos del siglo XXI! Transforman líneas de texto en soluciones asombrosas. #Programación #Magia', '2023-05-30 21:32:01'),
(64, 21, 'Siempre me emociona cuando mi código se ejecuta sin errores. Es como una pequeña victoria en el mundo de la programación. #Coding #Éxito', '2023-05-30 21:32:01'),
(65, 21, 'La programación es como escribir poesía, pero en lugar de palabras, utilizamos lenguajes de programación. #Programación #Poesía', '2023-05-30 21:32:01'),
(66, 21, 'La clave para ser un buen programador es la perseverancia. A veces, el código puede ser complicado, pero nunca te rindas. #Programación #Perseverancia', '2023-05-30 21:32:01'),
(67, 9, 'Me voy de vacaciones!', '2023-05-30 21:40:26'),
(68, 9, '#OpenToWork', '2023-05-30 21:42:51'),
(69, 12, 'Vuelta al trabajo después de las vacaciones! ', '2023-05-31 09:24:42'),
(70, 12, 'El código bien estructurado es como la poesía: elegante, conciso y lleno de significado. #Programación #CodePoetry', '2023-05-31 09:30:49'),
(71, 12, '\nLa resolución de problemas es una habilidad fundamental en la programación. ¡No te rindas hasta encontrar la solución! #Programación #ProblemSolving', '2023-05-31 09:32:17'),
(72, 12, 'En la programación, los errores son inevitables, pero aprender de ellos es lo que te hará crecer como desarrollador. #Programación #LearningFromMistakes', '2023-05-31 09:33:52'),
(73, 12, 'La programación es un lenguaje universal. Puedes colaborar con desarrolladores de todo el mundo para crear cosas asombrosas juntos. #Programación #CodingCollaboration', '2023-05-31 09:38:42'),
(74, 7, 'La programación no se trata solo de solucionar problemas, sino de encontrar formas innovadoras de abordarlos. ¡Piensa fuera de la caja de código!', '2023-05-31 09:39:56'),
(75, 1, '&quot;El lenguaje de programación que elijas aprender no es tan importante como tu pasión y dedicación para convertirte en un buen desarrollador. 🔥 #Programación #Desarrollador&quot;', '2023-05-31 09:40:44'),
(76, 1, 'La paciencia es una virtud en la programación. Los errores pueden ser frustrantes, pero persevera y encontrarás la solución. 🙏 #Programación #Paciencia', '2023-05-31 09:41:39'),
(77, 1, '&quot;¿Por qué escribir una vez cuando puedes automatizarlo? La programación te permite ahorrar tiempo y esfuerzo al crear herramientas que hacen el trabajo por ti. ⏰ #Automatización #Programación&quot;', '2023-05-31 09:52:33'),
(78, 1, 'La programación es el arte de decirle a una máquina cómo resolver un problema. ¡Y a veces, la máquina tiene opiniones diferentes! 😅 #Programación #Humor', '2023-05-31 09:56:20'),
(79, 1, 'El código hermoso no solo funciona, también es fácil de entender y mantener. Invierte tiempo en hacerlo legible y tus futuros yo te lo agradecerán. 👓 #CódigoLimpio #Desarrollo', '2023-05-31 10:00:09'),
(80, 7, 'La programación es una combinación de ciencia y arte. Necesitas habilidades técnicas, pero también la capacidad de imaginar soluciones innovadoras. 🎨💻 #Programación #Innovación', '2023-05-31 10:03:37'),
(81, 7, 'A veces, el mejor error es aquel que nunca ocurrió. #BugFree', '2023-05-31 10:05:24'),
(82, 7, 'Un buen programador no solo resuelve problemas, sino que también los previene. #PrevenciónDeErrores', '2023-05-31 10:08:05'),
(83, 1, 'La curiosidad es el combustible que impulsa a los programadores a explorar nuevas tecnologías y soluciones. #CuriosidadProgramadora', '2023-05-31 10:09:57'),
(84, 1, 'La programación es como un lenguaje universal. Nos permite comunicarnos con las máquinas y crear soluciones para los desafíos de hoy y del futuro. 🌐 #Tecnología #Desarrollo', '2023-05-31 10:13:28'),
(90, 1, 'En el mundo de la programación, la curiosidad es un superpoder. Siempre pregúntate &#x27;¿por qué?&#x27; y nunca dejes de aprender. 🧠 #Curiosidad #Aprendizaje', '2023-05-31 10:24:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reactions`
--

CREATE TABLE `reactions` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reactions`
--

INSERT INTO `reactions` (`post_id`, `user_id`) VALUES
(1, 1),
(1, 5),
(2, 4),
(6, 12),
(7, 1),
(8, 5),
(8, 12),
(9, 1),
(9, 5),
(9, 12),
(10, 1),
(11, 1),
(11, 4),
(11, 12),
(12, 4),
(13, 12),
(14, 5),
(14, 12),
(15, 1),
(16, 1),
(16, 4),
(16, 12),
(17, 5),
(17, 12),
(19, 9),
(19, 12),
(19, 18),
(20, 3),
(20, 9),
(21, 9),
(23, 9),
(25, 9),
(25, 12),
(26, 12),
(27, 9),
(29, 5),
(29, 12),
(30, 1),
(32, 5),
(32, 12),
(33, 5),
(33, 12),
(33, 16),
(36, 12),
(37, 5),
(37, 12),
(38, 12),
(45, 4),
(48, 16),
(50, 16),
(54, 18),
(67, 9),
(68, 9),
(68, 11),
(78, 1),
(80, 7),
(82, 7),
(83, 1),
(90, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recomendations`
--

CREATE TABLE `recomendations` (
  `content` varchar(500) NOT NULL,
  `giver_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `relation` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `publishDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recomendations`
--

INSERT INTO `recomendations` (`content`, `giver_id`, `receiver_id`, `relation`, `position`, `publishDate`) VALUES
('Este programador demuestra una gran habilidad para trabajar en proyectos de alto volumen. Su capacidad para gestionar múltiples tareas y cumplir con los plazos es notable.', 4, 15, 'Empleado', 'Desarrollador', '2023-05-30 21:54:27'),
('El programador demuestra un sólido conocimiento de lenguajes de programación y resuelve problemas de manera eficiente. Gran trabajo.', 6, 5, 'Superior directo', 'Desarrallor', '2023-05-30 21:32:31'),
('La atención al detalle de este programador es impresionante. Su código está limpio y bien estructurado, lo que facilita la colaboración en el equipo.', 6, 7, 'Superior directo', 'Desarrallor', '2023-05-30 21:32:31'),
('Me gusta la forma en que este programador se acerca a los desafíos. Siempre busca soluciones innovadoras y encuentra formas más eficientes de hacer las cosas.', 6, 18, 'Superior directo', 'Desarrallor', '2023-05-30 21:32:31'),
('El programador muestra una mentalidad orientada a la calidad. Se esfuerza por producir un código robusto y fiable, lo que es invaluable para el éxito del proyecto.', 9, 11, 'Supervisor', 'jefe departamento', '2023-05-30 21:42:06'),
('Este programador es excelente en la resolución de problemas complejos. Su habilidad para descomponerlos en partes más pequeñas y abordarlos sistemáticamente es impresionante.', 14, 10, 'Supervision', 'Tutor', '2023-05-30 21:50:32');

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
  `userType` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `name`, `surname1`, `surname2`, `username`, `email`, `password`, `age`, `city`, `country`, `studies`, `languages`, `linkedin`, `hobbies`, `role`, `picture`, `userType`) VALUES
(1, 'Aleksandar', 'Ostertag', 'Ostertag', 'Admin', 'admin@admin.com', '$2b$10$X6bY8zXgfoVEy04.limysOMEV4cYyZ0KAG.KuQvpg6BK40XfF6knG', 35, 'Landau', 'Germany', 'Administrador de sistemas', 'Aleman Ingles', 'https://linkedin/kanban-docker-rails/t', 'Motociclismo Automovilismo', 'Administrador', 'https://randomuser.me/api/portraits/men/60.jpg', 1),
(2, 'Sarah ', 'King', 'King', 'beautifulfrog544', 'sarah.king@example.com', '$2b$10$P3EmK7bfUwxQ9Eiqc0OkTuWpPeF0yJrjcGmaOCQuFN8KQb4zrGMVC', 34, 'Canterbury', 'United Kingdom', 'DAM', 'Ingles', 'https://linkedin/drupal-mysql-devops/u', 'Musica lectura', 'Desarrallor senior', 'https://randomuser.me/api/portraits/women/25.jpg', 0),
(3, 'Stella ', 'Edwards', 'Edwards', 'tinycat710', 'stella.edwards@example.com', '$2b$10$YgSe5NUMSbf9gndTQCLLReQq1GWcrTi9UloRdpzuE.g.8C5uQFvCu', 32, 'Upper Hutt', 'New Zealand', 'Fullstack bootcamp', 'Ingles', 'https://linkedin/css-aws-svn/l', 'Deportes', 'Desarrallor fullstack', 'https://randomuser.me/api/portraits/women/77.jpg', 0),
(4, 'Eline ', 'Faure', 'Faure', 'blackbutterfly301', 'eline.faure@example.com', '$2b$10$MZidLVvEhVVQnPL9gQeP8udwrvcmLq5xjy55szbBf6KKEDoXjRdGa', 63, 'Aulnay-sous-Bois', 'France', 'Ingenieria informatica', 'Frances', 'https://linkedin/mongodb-responsive-ux/J', 'Cine', 'Arquitecto software', 'https://randomuser.me/api/portraits/women/89.jpg', 0),
(5, 'Pius ', 'Perrin', 'Perrin', 'brownzebra139', 'pius.perrin@example.com', '$2b$10$7KbdSi3y4.zCDCZE8ljJG.hiFBsIKDHQJ82EPbKJaWTfr/rykStNy', 76, 'Oberrieden', 'Switzerland', 'BBDD bootcamp', 'Suizo', 'https://linkedin/php-wireframe-gcp/P', 'Ciclismo', 'Administrador de base de datos', 'https://randomuser.me/api/portraits/men/75.jpg', 0),
(6, 'Arthur ', 'Harvey', 'Harvey', 'biglion614', 'arthur.harvey@example.com', '$2b$10$dMPkmdDnuZNkDXlYk1D7Bel6AimDdkwdz7T/.bGf5WuAMwJn/AMei', 54, 'Bowral', 'Australia', 'Fullstack bootcamp', 'Ingles', 'https://linkedin/heroku-wordpress-html/E', 'Cocina', 'Desarrallor fullstack junior', 'https://randomuser.me/api/portraits/men/36.jpg', 0),
(7, 'Lada ', 'Ninković', 'Ninković', 'lazybear860', 'lada.ninkovic@example.com', '$2b$10$979/dvbE4FO3lWqxbLRYrO3pEjGQV8oOFxBDL1pUCuzRbqBtsoRni', 29, 'Titel', 'Serbia', 'Ingenieria informatica', 'Ruso', 'https://linkedin/agile-javascript-sitemap/a', 'Fotografía', 'Ingeniero de software', 'https://randomuser.me/api/portraits/women/83.jpg', 0),
(8, 'Jens-Peter ', 'Kämpf', 'Kämpf', 'ticklishmouse502', 'jens-peter.kampf@example.com', '$2b$10$qJcUc/a7krzKr5EScDGW/.njuLyYQM7dsxIaDBbPFatf392n4NasG', 59, 'Arnstein', 'Germany', 'DAW', 'Aleman', 'https://linkedin/azure-ab-testing-joomla/u', 'Videojuegos', 'Desarrallor Web', 'https://randomuser.me/api/portraits/men/31.jpg', 0),
(9, 'Alfred ', 'Mortensen', 'Mortensen', 'tinyrabbit949', 'alfred.mortensen@example.com', '$2b$10$UBQWiKPdMNm5V8HtYKQ9nufcYtV1xfUyRjLCTdgvi0s/d5Jqqrmnu', 33, 'Viby J.', 'Denmark', 'Data Analyst', 'Danes', 'https://linkedin/digitalocean-redis-performance/w', 'Viajar', 'Data analyst', 'https://randomuser.me/api/portraits/men/33.jpg', 0),
(10, 'Fatih ', 'Erberk', 'Erberk', 'lazybear759', 'fatih.erberk@example.com', '$2b$10$0NxUckHynyxTq50LWcfOveV2PYcENaRyThxieIgnSXfWf0ZV94gBm', 74, 'Yozgat', 'Turkey', 'DAM', 'Ingles', 'https://linkedin/framework-mvc-html/P', 'Poesia', 'Desarrallor .Net ', 'https://randomuser.me/api/portraits/men/42.jpg', 0),
(11, 'Navya', 'Kamath', 'Kamath', 'bigmouse511', 'navya.kamath@example.com', '$2b$10$HZevn9QQu7rij6O/bfZ27.6qi99fBaYQ1KCeZpAevxHTvVu8JvzcC', 61, 'Bulandshahr', 'India', 'DAM', 'Indio', 'https://linkedin/jenkins-cache-netlify/S', 'Leer Escribir', 'Desarrollador senior', 'https://randomuser.me/api/portraits/women/87.jpg', 0),
(12, 'Leo', 'Singh', 'Singh', 'blacklion513', 'leo.singh@example.com', '$2b$10$Nw4VURmXeceF9fyLkMJrguSpueq3tenSukpdRGoKLV7iN7fQn7ma6', 34, 'Winfield', 'Canada', 'DAM', 'Ingles', 'https://linkedin/ux-ui-bitbucket/B', 'Natacion', 'Desarrollador fullstack', 'https://randomuser.me/api/portraits/men/80.jpg', 0),
(13, 'Amy', 'French', 'French', 'ticklishbear854', 'amy.french@example.com', '$2b$10$iJqxxN4d0Ek7pj.KrLApBOCxaFmfSMpgGgR1EX4jwWyDpkle.5X9y', 58, 'Greenwood', 'Canada', 'DAM', 'Ingles', 'https://linkedin/conversion-rate-mobile-first-nosql/Q', 'Cine, Television', 'Administrador de DDBB', 'https://randomuser.me/api/portraits/women/34.jpg', 0),
(14, 'Zborislav', 'Belonovich', 'Belonovich', 'whitepeacock824', 'zborislav.belonovich@example.com', '$2b$10$2/l5RbZ/5JvVzfPyv/BtKu/BJS3KOzaZDNWO/Z2uySN2JP0EDo6nC', 62, 'DAW', 'Radomishl', 'Ukraine', 'Ucraniano', 'https://linkedin/kanban-docker-rails/t', 'Trekking, escalada', 'Desarrollador junior', 'https://randomuser.me/api/portraits/men/18.jpg', 0),
(15, 'Francisca', 'Pineda', 'Pineda', 'redsnake819', 'francisca.pineda@example.com', '$2b$10$0LHQa66fPlNrgwMMZ9YND.CzXjaTLmx3KDeuK7SzaRYxM5UikFC56', 48, 'Ezequiel', 'Mexico', 'Ingenieria Informatica', 'Mexicano', 'https://linkedin/kanban-docker-rails/t', 'Aeromodelismo', 'Jefe de proyectos', 'https://randomuser.me/api/portraits/women/12.jpg', 0),
(16, 'Timmothy', 'Mitchell', 'Mitchell', 'greenfish708', 'timmothy.mitchell@example.com', '$2b$10$WVNjS3nVNn7P4eOxJRBWyOTZrw5yWUKQkNFWCPuaABXiwKOGzzFxW', 54, 'Davenport', 'United States', 'DAW', 'Ingles', 'https://linkedin/kanban-docker-rails/t', 'Futbol', 'Scrum master', 'https://randomuser.me/api/portraits/men/72.jpg', 0),
(17, 'Chloe', 'Lavoie', 'Lavoie', 'whiteelephant618', 'chloe.lavoie@example.com', '$2b$10$4ysaZZxYBGeOwm/VU/aqT.FcvpzgcfpihgzHx5Smfw8MBy7ekUsDW', 71, 'Fauquier', 'Canada', 'DAW', 'Ingles', 'https://linkedin/kanban-docker-rails/t', 'Cocina Reposteria', 'Desarrollador web', 'https://randomuser.me/api/portraits/women/40.jpg', 0),
(18, 'Penny', 'Gray', 'Gray', 'heavypeacock921', 'penny.gray@example.com', '$2b$10$Y6Xm/YdLZMMzG6mqMqs47.H8L1/nshIhAwSGF3NXw8Czp8rMtdEy.', 25, 'Toowoomba', 'Australia', 'Bootcamp fullstack', 'Ingles', 'https://linkedin/kanban-docker-rails/t', 'Bricolaje', 'Desarrollador fullstack', 'https://randomuser.me/api/portraits/women/41.jpg', 0),
(19, 'Amelia', 'Denys', 'Denys', 'heavyladybug533', 'amelia.denys@example.com', '$2b$10$XeYlA9XMm8yeXbIMkV43rewqvzF1UOgQWzdKjxHPmV0SDXp2Mbrrq', 26, 'Stratford', 'Canada', 'Bootcamp frontend', 'Ingles', 'https://linkedin/kanban-docker-rails/t', 'Surf Ski', 'Desarrollador frontend', 'https://randomuser.me/api/portraits/women/56.jpg', 0),
(20, 'Ofelia', 'Rosado', 'Rosado', 'whitefish551', 'ofelia.rosado@example.com', '$2b$10$AI5Q6Yb0S4TcuGZ75ycv1eJ1QH86skBdGxkPE5ELPIq8bWX/Q5tgW', 65, 'Montes', 'Mexico', 'Bootcamp backend', 'Mexicano', 'https://linkedin/kanban-docker-rails/t', 'Tocar la guitarra', 'Desarrollador software', 'https://randomuser.me/api/portraits/women/79.jpg', 0),
(21, 'Maxime', 'Ginnish', 'Ginnish', 'silverlion117', 'maxime.ginnish@example.com', '$2b$10$W8GSdzvn4pA.YSaLJuc5n.3mrsfhtKcOfAsarQ7t4/RkcUY9w7ld2', 69, 'Havelock', 'Canada', 'DAM', 'Ingles', 'https://linkedin/kanban-docker-rails/t', 'Viajar', 'Analista de datos', 'https://randomuser.me/api/portraits/men/56.jpg', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`sender_id`,`receptor_id`),
  ADD KEY `FK_receptor` (`receptor_id`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `FK_UserPost` (`user_id`);

--
-- Indices de la tabla `reactions`
--
ALTER TABLE `reactions`
  ADD PRIMARY KEY (`post_id`,`user_id`),
  ADD KEY `FK_User` (`user_id`);

--
-- Indices de la tabla `recomendations`
--
ALTER TABLE `recomendations`
  ADD PRIMARY KEY (`giver_id`,`receiver_id`),
  ADD KEY `FK_receiver` (`receiver_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
  ADD CONSTRAINT `FK_Post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_User` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `recomendations`
--
ALTER TABLE `recomendations`
  ADD CONSTRAINT `FK_giver` FOREIGN KEY (`giver_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_receiver` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
