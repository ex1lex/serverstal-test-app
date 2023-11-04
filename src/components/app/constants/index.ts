import { Direction, IData, Order } from '../types';

export const defaultOrder: Order<IData> = {
	column: 'name',
	direction: Direction.asc,
};
