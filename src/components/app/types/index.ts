export interface IColumns {
	name: string;
	balance: string;
	email: string;
	isActive: 'all' | 'true' | 'false';
}

export enum Direction {
	asc = 'asc',
	desc = 'desc',
}

export interface Order<T = IColumns> {
	column: keyof T;
	direction: Direction;
}

export interface IChildrenData {
	id: string;
	parentId: number;
	isActive: boolean;
	balance: string;
	name: string;
	email: string;
}

export interface IData extends IChildrenData {
	children: IChildrenData[];
	showChildren: boolean;
}
