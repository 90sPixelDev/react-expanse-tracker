import React, { useState, useContext } from 'react';
import ExpenseDate from './ExpenseDate';
import PropTypes from 'prop-types';
import { funcsContext } from '../Context/FuncContext';

const ExpenseItem = (props) => {
	// const [title, setTitle] = useState(props.title);

	const classes = {
		expenseParent:
			'w-[90%] group bg-red-50 sm:hover:scale-105 sm:hover:shadow-gray-800/100 shadow-lg transition-all ease-in-out pb-[.025em] rounded-[2em] grid grid-rows-expenseItem grid-cols-expenseItem',
		spacing: 'flex items-center justify-between pl-4 pr-2 my-2 col-start-1 col-end-3 row-start-1 row-end-3 w-full',
		flexLayout:
			'flex flex-row w-full min-w-0 justify-between items-center overflow-hidden',
		expenseAmtParent: 'pl-2',
		xButton: 'bg-white w-full min-w-[20px] h-[100%] rounded-tr-full border-2 sm:hover:bg-red-200 row-start-1 col-start-2',
		category:
			'text-center w-[100%] rounded-b-full row-start-3 col-start-1 col-end-3',
	};

	let cateoryStyle = { backgroundColor: 'rgb(255, 255, 255)' };
	let bg = { backgroundColor: 'rgb(230, 230, 230)' };
	switch (props.category) {
		case 'Other':
			cateoryStyle = {
				backgroundColor: '#cff3ce',
			};
			bg = {
				backgroundColor: '#9be698',
			};
			break;
		case 'Bill':
			cateoryStyle = {
				backgroundColor: '#f3cece',
			};
			bg = {
				backgroundColor: '#e8a1a1',
			};
			break;
		case 'Food':
			cateoryStyle = {
				backgroundColor: '#eecbb9',
			};
			bg = {
				backgroundColor: '#e5af94',
			};
			break;
		case 'Fun':
			cateoryStyle = {
				backgroundColor: '#cedaf3',
			};
			bg = {
				backgroundColor: '#a1b7e8',
			};
			break;
		case 'Loan':
			cateoryStyle = {
				backgroundColor: '#d5cef3',
			};
			bg = {
				backgroundColor: '#b1a5e9',
			};
			break;
	}

	const funcs = useContext(funcsContext);

	const atmTextSizeHandler = () => {
		const charaLength = props.amount.toString().length;
		if (charaLength > 6)
			return 'bg-white w-fit h-fit m-auto min-w-[100px] text-center p-2 rounded-3xl border-2 border-gray-200 text-[3vw] xsm:text-xl';
		else if (charaLength > 10)
			return 'bg-white w-fit h-fit m-auto min-w-[100px] text-center p-2 rounded-3xl border-2 border-gray-200 text-[2vw] xsm:text-xl';
		else
			return 'bg-white w-fit h-fit m-auto min-w-[100px] text-center p-2 rounded-3xl border-2 border-gray-200 text-[4vw] xsm:text-xl';
	};
	const titleTextSizeHandler = () => {
		const charaLength = props.title.toString().length;
		if (charaLength > 16)
			return 'lg:text-gray-600 lg:group-hover:text-black font-bold text-[3vw] xsm:text-xl sm:text-2xl my-auto break-words min-w-0 text-center w-[100%]';
		else
			return 'lg:text-gray-600 lg:group-hover:text-black font-bold text-[4vw] xsm:text-xl sm:text-2xl my-auto break-words min-w-0 text-center w-[33%]';
	};

	return (
		<li className={classes.expenseParent} style={cateoryStyle}>
			<div className={classes.spacing}>
				<div className={classes.flexLayout}>
					<ExpenseDate date={props.date} />
					<p className={titleTextSizeHandler()}>{props.title}</p>
					<div className={classes.expenseAmtParent}>
						<p className={atmTextSizeHandler()}>
							${props.amount}
						</p>
					</div>
				</div>
			</div>
			<button
				className={classes.xButton}
				onClick={() => {
					funcs.funcDel(props.id);
				}}
			>
				x
			</button>
			<p className={classes.category} style={bg}>
				{props.category}
			</p>
		</li>
	);
};

ExpenseItem.propTypes = {
	title: PropTypes.string,
	date: PropTypes.instanceOf(Date),
	amount: PropTypes.number,
	category: PropTypes.string,
	onDeleteExpense: PropTypes.func,
	id: PropTypes.string,
	getKey: PropTypes.func,
};

export default ExpenseItem;
