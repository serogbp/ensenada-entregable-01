import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
	return <UserContext.Provider value={UserHelper()}>{children}</UserContext.Provider>;
}

export function useUser() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}

function UserHelper() {
	const [user, setUser] = useState({
		user_id: "",
		name: "",
		surname1: "",
		surname2: "",
		username: "",
		email: "",
		age: "",
		city: "",
		country: "",
		studies: "",
		languages: "",
		linkedin: "",
		hobbies: "",
		role: "",
		picture: "",
		userType: 0,
	});
	return { user, setUser };
}
