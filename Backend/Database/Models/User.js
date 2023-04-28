export class User {
	constructor({ id, name, surname1, surname2, username, age, city, country, studies, role, languages, email, linkedin, hobbies, password, picture }) {
		this.id = id;
		this.name = name;
		this.surname1 = surname1;
		this.surname2 = surname2;
		this.username = username;
		this.age = age;
		this.city = city;
		this.country = country;
		this.studies = studies;
		this.role = role;
		this.languages = languages;
		this.email = email;
		this.linkedin = linkedin;
		this.hobbies = hobbies;
		this.password = password;
		this.picture = picture ?? "https://img.freepik.com/psd-premium/ilustracion-3d-hombre-caucasico-sonriente-retrato-cerca-dibujos-animados-hombre-caucasico-pie-sobre-fondo-amarillo-avatar-3d-ui-ux_1020-5081.jpg";
	}
}
