import React, { FC, memo } from 'react';
import { IColumns, IData } from '../../types';
import Button from '../../../button';
import './index.scss';

interface Props {
	sortColumn: undefined | keyof IData;
	filterValues: IColumns;
	handleSort: (column: keyof IColumns) => void;
	handleFilter: (column: keyof IColumns, value: string) => void;
}

const TableHeader: FC<Props> = (props: Props) => {
	const { sortColumn, filterValues, handleSort, handleFilter } = props;

	return (
		<thead className="table-header">
			<tr>
				<th className="table-header__th">
					<input
						type="text"
						className="table-header__filter"
						value={filterValues.name}
						onChange={(e) => handleFilter('name', e.target.value)}
						placeholder="Name"
					/>
					<Button
						title={<>&#x21C5;</>}
						isActive={sortColumn === 'name'}
						onClick={() => handleSort('name')}
					/>
				</th>
				<th className="table-header__th">
					<input
						type="text"
						className="table-header__filter"
						value={filterValues.balance}
						onChange={(e) => handleFilter('balance', e.target.value)}
						placeholder="Balance"
					/>
					<Button
						title={<>&#x21C5;</>}
						isActive={sortColumn === 'balance'}
						onClick={() => handleSort('balance')}
					/>
				</th>
				<th className="table-header__th">
					<input
						type="text"
						className="table-header__filter"
						value={filterValues.email}
						onChange={(e) => handleFilter('email', e.target.value)}
						placeholder="Email"
					/>
					<Button
						title={<>&#x21C5;</>}
						isActive={sortColumn === 'email'}
						onClick={() => handleSort('email')}
					/>
				</th>
				<th className="table-header__th">
					<select
						className="table-header__filter"
						value={filterValues.isActive.toString()}
						onChange={(e) => handleFilter('isActive', e.target.value)}
					>
						<option value="all">All</option>
						<option value="true">Active</option>
						<option value="false">Inactive</option>
					</select>
					<Button
						title={<>&#x21C5;</>}
						isActive={sortColumn === 'isActive'}
						onClick={() => handleSort('isActive')}
					/>
				</th>
				<th className="table-header__th"></th>
			</tr>
		</thead>
	);
};

export default memo(TableHeader);
