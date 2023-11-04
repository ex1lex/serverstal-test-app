export const sortArrayByField = <T>(arr: T[], column: keyof T) =>
	arr.sort((a, b) => {
		if (a[column] < b[column]) {
			return -1;
		}
		if (a[column] > b[column]) {
			return 1;
		}
		return 0;
	});
