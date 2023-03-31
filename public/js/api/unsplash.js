/*
	Obtener una imagen aleatoria de Unsplash a partir de un termino de búsqueda.
	@params searchTerms: Array de términos de búsqueda. Si no encuentra imagen, pasa a buscar con el siguiente término de búsqueda mediante recursión
*/
export const getUnsplashImage = async (searchTerms) => {
	const result = await fetch(`https://source.unsplash.com/random/500x300/?${searchTerms[0]}`);
	if (result.ok) return result.url;

	if (searchTerms.shift()) {
		return await getUnsplashImage(searchTerms);
	} else {
		return "";
	}
};
