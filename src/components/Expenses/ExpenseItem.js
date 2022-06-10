import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import PropTypes from 'prop-types';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const classes = {
		expenseParent:
			'w-[90%] group bg-red-50 sm:hover:scale-105 sm:hover:shadow-gray-800/100 shadow-lg transition-all ease-in-out pb-[.025em] rounded-[2em] grid grid-rows-expenseItem grid-cols-expenseItem',
		spacing: 'flex items-center justify-between mx-4 my-2',
		flexLayout: 'inline-flex w-100',
		expenseTitle:
			'text-gray-700 group-hover:text-black font-bold text-[4vw] xsm:text-xl sm:text-2xl my-auto p-3',
		expenseAmt:
			'bg-white w-fit min-w-[100px] text-center p-3 rounded-3xl border-2 border-gray-200',
		expenseAmtText: 'text-[4vw] xsm:text-xl',
		end: 'flex flex-row gap-4',
		xButton: 'bg-white w-full min-w-[20px] h-[30%] rounded-tr-full border-2 sm:hover:bg-red-200',
		category: 'text-center w-[100%] rounded-b-full col-span-3',
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

	const deleteExpenseHandler = () => {
		props.onDeleteExpense(props.id);
	};

	return (
		<li className={classes.expenseParent} style={cateoryStyle}>
			<div className={classes.spacing}>
				<div className={classes.flexLayout}>
					<ExpenseDate date={props.date} />
					<p className={classes.expenseTitle}>{title}</p>
				</div>
				<div className={classes.end}>
					<div className={classes.expenseAmt}>
						<p className={classes.expenseAmtText}>
							${props.amount}
						</p>
					</div>
				</div>
			</div>
			<button
				className={classes.xButton}
				onClick={deleteExpenseHandler}
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
