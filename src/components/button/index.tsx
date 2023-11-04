import React, { FC, memo } from 'react';
import './index.scss';

interface Props {
	title: React.ReactNode;
	onClick: () => void;
	isActive?: boolean;
	disabled?: boolean;
}

const Button: FC<Props> = (props: Props) => {
	const { title, onClick, isActive, disabled } = props;

	return (
		<button
			className={`btn ${isActive && 'btn_active'}`}
			onClick={onClick}
			disabled={disabled}
		>
			{title}
		</button>
	);
};

export default memo(Button);
