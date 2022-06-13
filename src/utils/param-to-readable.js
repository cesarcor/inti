export function param_to_readable(param) {
	const words = param.split('-');

	return words.map((e) => {
		return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase() + ' ';
	});
}
