export default function capitalize(str) {
	const firstLetter = str.charAt(0);
	const firstLetterCapped = firstLetter.toUpperCase();
	const rest = str.slice(1);

	return firstLetterCapped + rest;
}
