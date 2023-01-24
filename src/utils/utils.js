export const addYearsOptions = () => {
	const currentYear = new Date().getFullYear();
	let optionElements = [];
	for (let i = currentYear; i >= 2000; i--) {
		optionElements.push(i.toString());
	}
	return optionElements;
};

export const randomKeyGenerator = (nameElem) => {
	const key = Math.floor(Math.random() * 6) + nameElem;
	return key;
};
