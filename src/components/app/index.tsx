import React, { useState, useMemo, FC } from 'react';
import { TEST_DATA } from './test-data';
import { IData, IColumns, Direction, Order } from './types';
import { sortArrayByField } from '../../utils';
import TableHeader from './components/tableHeader';
import TableBody from './components/tableBody';
import { defaultOrder } from './constants';
import './index.scss';

const App: FC = () => {
	const initialData = useMemo(() => {
		const modData = TEST_DATA.map((item) => ({
			...item,
			id: item.id.toString(),
			showChildren: false,
			children: TEST_DATA.filter(
				(childItem) => childItem.parentId === item.id
			).map((childItem) => ({
				...childItem,
				id: item.id + '_child_' + childItem.id,
			})),
		}));

		return sortArrayByField<IData>(modData, defaultOrder);
	}, [TEST_DATA]);

	const [data, setData] = useState<IData[]>(initialData);
	const [order, setOrder] = useState<Order<IData>>(defaultOrder);
	const [filterValues, setFilterValues] = useState<IColumns>({
		name: '',
		balance: '',
		email: '',
		isActive: 'all',
	});

	const handleSort = (column: keyof IData) => {
		const newOrder = {
			column,
			direction: Direction.asc,
		};
		if (order.column === newOrder.column) {
			newOrder.direction =
				order.direction === Direction.asc ? Direction.desc : Direction.asc;
		}
		setOrder(newOrder);
		setData((prevData) => sortArrayByField<IData>(prevData, newOrder));
	};

	const handleFilter = (column: keyof IColumns, value: string) => {
		const newFilter = {
			...filterValues,
			[column]: value,
		};
		setFilterValues(newFilter);

		const filteredData = initialData.filter((item) => {
			return (
				(newFilter.name
					? item.name.toLowerCase().includes(newFilter.name.toLowerCase())
					: true) &&
				(newFilter.balance
					? item.balance.toLowerCase().includes(newFilter.balance.toLowerCase())
					: true) &&
				(newFilter.email
					? item.email.toLowerCase().includes(newFilter.email.toLowerCase())
					: true) &&
				(newFilter.isActive === 'all' ||
					item.isActive.toString() === newFilter.isActive)
			);
		});
		setData(filteredData);
	};

	const handleToggleChildRows = (parentId: string) => {
		setData((prevData) => {
			return prevData.map((item) => {
				if (item.id === parentId) {
					return {
						...item,
						showChildren: !item.showChildren,
					};
				}
				return item;
			});
		});
	};

	return (
		<table className="table">
			<TableHeader
				sortColumn={order.column}
				filterValues={filterValues}
				handleSort={handleSort}
				handleFilter={handleFilter}
			/>
			<TableBody data={data} handleToggleChildRows={handleToggleChildRows} />
		</table>
	);
};

export default App;
