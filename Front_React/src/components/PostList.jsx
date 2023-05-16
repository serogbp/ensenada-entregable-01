import { useState } from "react";
import PostListItem from "./PostListItem";
import PostCreator from "./PostCreator";

export default function PostList() {
	const [posts, setPosts] = useState(POSTS_DEFAULT);
	// TODO fetch posts

	const addPost = (newPost) => {
		setPosts([newPost, ...posts]);
	};

	return (
		<div className="d-flex flex-column gap-4">
			<>
				<PostCreator addPost={addPost} />
				{posts.map((post, index) => (
					<PostListItem post={post} key={index} />
				))}
			</>
		</div>
	);
}

// TODO borrar
const POSTS_DEFAULT = [
	{ post_id: 1, likes: 5, user_id: 1, publishDate: "2023-04-28 10:02:54", content: "El desarrollo de software se trata de crear algo nuevo e innovador. Es un proceso de convertir una idea en una realidad." },
	{ post_id: 2, likes: 1, user_id: 3, publishDate: "2023-04-28 10:02:54", content: "Una empresa de desarrollo de software puede ayudarlo a crear el software personalizado que necesita para optimizar su negocio. ¡Déjanos ayudarte con tu próximo proyecto!" },
	{ post_id: 3, likes: 15, user_id: 1, publishDate: "2023-04-28 10:02:54", content: "Consejos de producción de software de desarrollo: https://t.co/xnl3iNcuW7 #software #desarrollo #manager" },
	{ post_id: 4, likes: 1, user_id: 2, publishDate: "2023-04-28 10:02:54", content: "El desarrollo de software tiene que ver con la creación de aplicaciones y programas que nos hacen la vida más fácil. Desde las herramientas más simples hasta los sistemas más complejos, el desarrollo de software es una parte vital para mantener el mundo en funcionamiento." },
	{ post_id: 5, likes: 5, user_id: 2, publishDate: "2023-04-28 10:02:54", content: "Desarrollo de software: más fácil de aprender de lo que piensas. Sigue estos pasos y podrás dominarlo en no time." },
	{ post_id: 6, likes: 1, user_id: 4, publishDate: "2023-04-28 10:02:54", content: "¡El software de desarrollo tiene que ver con la eficiencia y hacer las cosas!" },
	{ post_id: 7, likes: 12, user_id: 1, publishDate: "2023-04-28 10:02:54", content: "El desarrollo de software es una industria en constante evolución. Aprende las mejores prácticas para crear aplicaciones de calidad." },
	{ post_id: 8, likes: 7, user_id: 4, publishDate: "2023-04-28 10:02:54", content: "Enamorado del desarrollo fullstack. La sensación de satisfacción cuando creas algo desde cero y lo ves funcionar es inigualable." },
	{ post_id: 9, likes: 13, user_id: 5, publishDate: "2023-04-28 10:02:54", content: "JavaScript para el frontend, Python para el backend = desarrollo web fullstack." },
	{ post_id: 10, likes: 6, user_id: 1, publishDate: "2023-04-28 10:02:54", content: "¡Qué tal, fullstackers! ¡Es hora de obtener nuestro código y construir algo increíble!" },
	{ post_id: 11, likes: 7, user_id: 5, publishDate: "2023-04-28 10:02:54", content: "Una empresa de desarrollo de software puede ayudarlo a crear el software personalizado que necesita para optimizar su negocio. ¡Déjanos ayudarte con tu próximo proyecto!" },
	{ post_id: 12, likes: 3, user_id: 4, publishDate: "2023-04-28 10:02:54", content: "El desarrollo de software tiene que ver con la creación de aplicaciones y programas que nos hacen la vida más fácil. Desde las herramientas más simples hasta los sistemas más complejos, el desarrollo de software es una parte vital para mantener el mundo en funcionamiento." },
	{ post_id: 13, likes: 0, user_id: 6, publishDate: "2023-04-28 10:02:54", content: "El desarrollo de software es una industria en constante evolución. Aprende las mejores prácticas para crear aplicaciones de calidad." },
	{ post_id: 14, likes: 1, user_id: 6, publishDate: "2023-04-28 10:02:54", content: "Una base de datos es una colección de datos a la que pueden acceder las computadoras. Se utilizan para almacenar información que va desde información personal hasta registros financieros." },
	{ post_id: 15, likes: 3, user_id: 1, publishDate: "2023-04-28 10:02:54", content: "Estar al día con tus bases de datos es vital para mantener tu sitio web funcionando correctamente. Aquí están algunos consejos para mantener tu base de datos en buena forma. #databases #webdevelopment" },
	{ post_id: 16, likes: 3, user_id: 5, publishDate: "2023-04-28 10:02:54", content: "¡Feliz #DíaDelDato! ¡Hoy se trata de celebrar el poder de los datos! #BigData #DevOps #Análisis de datos" },
	{ post_id: 17, likes: 1, user_id: 6, publishDate: "2023-04-28 10:02:54", content: "¡El camino a convertirse en un programador junior puede ser difícil, pero vale la pena! ¡No te rindas y sigue practicando!" },
	{ post_id: 18, likes: 10, user_id: 7, publishDate: "2023-04-28 10:02:54", content: "Soy #programadorjunior y me encanta! Es muy gratificante codificar y crear cosas que ayuden a las personas." },
	{ post_id: 19, likes: 4, user_id: 8, publishDate: "2023-04-28 10:02:54", content: "¡Estoy tan feliz de ser finalmente un programador junior! Ha sido un viaje largo pero valió la pena. #programadorjunior" },
	{ post_id: 20, likes: 5, user_id: 9, publishDate: "2023-04-28 10:02:54", content: "¡Me gradué de programador junior! No puedo esperar para comenzar mi aventura en el mundo de la tecnología." },
	{ post_id: 21, likes: 6, user_id: 2, publishDate: "2023-04-28 10:02:54", content: "Entonces, ¿quieres ser un programador junior? ¡Aquí hay algunas cosas que necesita saber!" },
	{ post_id: 22, likes: 10, user_id: 7, publishDate: "2023-04-28 10:02:54", content: "¿Así que quieres ser un #programador junior? ¡Esto es lo que necesita saber! https://t.co/9afY1NcuFa" },
	{ post_id: 23, likes: 12, user_id: 2, publishDate: "2023-04-28 10:02:54", content: "¡Hola, #programadoressenior! Echa un vistazo a esta posición para un ingeniero de #bigdata. ¡Tú podrías ser el candidato que estamos buscando!" },
	{ post_id: 24, likes: 13, user_id: 7, publishDate: "2023-04-28 10:02:54", content: "¡Un programador senior de big data gana mucho dinero! Tienen una gran demanda y pueden hacer fácilmente seis cifras." },
	{ post_id: 25, likes: 12, user_id: 8, publishDate: "2023-04-28 10:02:54", content: "¡Hay una gran demanda de programadores senior de big data! Si está buscando dar el salto a un puesto senior, ahora es el momento." },
	{ post_id: 26, likes: 3, user_id: 8, publishDate: "2023-04-28 10:02:54", content: "Los grandes datos son un gran problema. Está cambiando la forma en que vivimos, trabajamos y pensamos." },
	{ post_id: 27, likes: 0, user_id: 9, publishDate: "2023-04-28 10:02:54", content: "El poder de los grandes datos es increíble. Tiene la capacidad de transformar industrias enteras y la forma en que vivimos nuestras vidas." },
	{ post_id: 28, likes: 8, user_id: 9, publishDate: "2023-04-28 10:02:54", content: "El futuro del big data está en la analítica y la inteligencia artificial." },
	{ post_id: 29, likes: 5, user_id: 6, publishDate: "2023-04-28 10:02:54", content: "Las empresas de hoy en día deben ser capaces de gestionar de forma eficaz los macrodatos para seguir siendo competitivas. #BigData" },
	{ post_id: 30, likes: 3, user_id: 1, publishDate: "2023-04-28 10:02:54", content: "Hola chicos, si quieren convertirse en desarrolladores de software, no escuchen a nadie que les diga que es fácil. Es mucho trabajo, pero también es muy divertido." },
	{ post_id: 31, likes: 1, user_id: 2, publishDate: "2023-04-28 10:02:54", content: "broma de desarrollador: ¿por qué los programadores siempre tienen que escribir código? ¡porque sin código, no habría nada que depurar!" },
];
