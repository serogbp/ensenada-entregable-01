let ticking = true;

/*
	Listener para ejecutar un callback cuando el scroll supere cierto valor.
	@params callback: Función que se ejecutará cuando el scroll de la página es superior a un valor
	@params tickingRate: Intervalo de tiempo en milisegundos en el que se ejecutará condición del listener para mejorar el rendimiento. Por defecto cada 100ms.
	@params scrollPercentage: Porcentaje de scroll que tiene que superar para ejecutar la función callback. Por defecto 80%.
*/
export default async (callback, tickingRate = 50, scrollPercentage = 100) => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	const actualScrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

	if (actualScrollPercentage >= scrollPercentage) {
		await callback();
	}

	// if (ticking) {
	// 	ticking = false;
	// 	setTimeout(() => {
	// 		ticking = true;
	// 	}, tickingRate);

	// 	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	// 	const actualScrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

	// 	if (actualScrollPercentage > scrollPercentage) {
	// 		await callback();
	// 		console.log("BBBBBBB");
	// 	}
	// }
};
