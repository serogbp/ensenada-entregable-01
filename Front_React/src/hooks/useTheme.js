import { useEffect, useState } from "react";

export default function useTheme() {
	const [theme, setTheme] = useState(getTheme());

	useEffect(() => {
		localStorage.setItem("theme", theme);

		if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.setAttribute("data-bs-theme", "dark");
		} else {
			document.documentElement.setAttribute("data-bs-theme", theme);
		}
	}, [theme]);

	function getTheme() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}

	// Cambiar theme de la app acorde con el theme del dispositivo
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
		if (theme !== "light" || theme !== "dark") {
			setTheme(getTheme());
		}
	});

	return {};
}
