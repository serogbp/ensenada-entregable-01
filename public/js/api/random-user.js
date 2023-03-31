export const getRandomUser = async () => {
	const result = await fetch("https://randomuser.me/api");
	const { results } = await result.json();
	return results[0];
};

export const getRandomUsers = async (amount) => {
	const result = await fetch(`https://randomuser.me/api/?results=${amount}`);
	const { results } = await result.json();
	return results;
};
