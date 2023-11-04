import { Order } from '../components/app/types';

export const sortArrayByField = <T>(arr: T[], order: Order<T>): T[] => {
	const { column, direction } = order;

	return arr.sort((a, b) => {
		if (direction === 'asc') {
			if (a[column] < b[column]) {
				return -1;
			}
			if (a[column] > b[column]) {
				return 1;
			}
			return 0;
		} else {
			if (a[column] > b[column]) {
				return -1;
			}
			if (a[column] < b[column]) {
				return 1;
			}
			return 0;
		}
	});
};
