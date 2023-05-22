import { useEffect, useState } from "react";

export default function useTheme() {
	const [theme, setTheme] = useState(getTheme());

	useEffect(() => {
		console.log("tema cambiado");
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

	function changeTheme() {
		setTheme(getTheme());
	}

	return { changeTheme };
}
