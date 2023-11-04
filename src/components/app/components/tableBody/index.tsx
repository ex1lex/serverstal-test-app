import React, { FC, memo } from 'react';
import { IData } from '../../types';
import Button from '../../../button';
import './index.scss';

interface Props {
	data: IData[];
	handleToggleChildRows: (parentId: string) => void;
}

const TableBody: FC<Props> = (props: Props) => {
	return (
		<tbody>
			{props.data.map((item) => (
				<React.Fragment key={item.id}>
					<tr
						className={`table-body__parent-tr ${
							item.showChildren ? 'table-body__parent-tr_is-open' : ''
						}`}
					>
						<td className="table-body__td"> {item.name}</td>
						<td className="table-body__td">{item.balance}</td>
						<td className="table-body__td">{item.email}</td>
						<td className="table-body__td">
							{item.isActive ? 'Active' : 'Inactive'}
						</td>
						<td className="table-body__td">
							{!!item.children.length && (
								<Button
									title={item.showChildren ? <>&#x2212;</> : <>&#x002B;</>}
									onClick={() => props.handleToggleChildRows(item.id)}
									disabled={!item.children.length}
								/>
							)}
						</td>
					</tr>
					{item.showChildren &&
						item.children.map((childItem) => (
							<tr key={childItem.id} className="table-body__child-tr">
								<td className="table-body__td"> {childItem.name}</td>
								<td className="table-body__td">{childItem.balance}</td>
								<td className="table-body__td">{childItem.email}</td>
								<td className="table-body__td">
									{childItem.isActive ? 'Active' : 'Inactive'}
								</td>
								<td className="table-body__td"></td>
							</tr>
						))}
				</React.Fragment>
			))}
		</tbody>
	);
};

export default memo(TableBody);
