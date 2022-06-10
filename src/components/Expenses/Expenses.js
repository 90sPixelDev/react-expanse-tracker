import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesBottom from './ExpensesBottom';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	const classes = {
		card: 'bottom-4 mx-5 bg-gray-100 w-[90vw] sm:w-[620px] flex flex-col self-start min-h-[30vh] transition',
		top: 'w-full py-1 border-x-2 border-gray-300 rounded-t-3xl',
		bottom: 'w-full py-1 border-x-2 border-gray-300 rounded-b-3xl',
	};

	const [filteredYear, setFilteredYear] = useState('All');

	const filterHandler = (yearSelected) => {
		setFilteredYear(yearSelected);
	};

	const filteredExpenses = props.items?.filter((expense) => {
		if (filteredYear === 'All') {
			return expense;
		} else
			return (
				expense.date.toDate().getFullYear().toString() ===
				filteredYear
			);
	});

	const finalOnDeleteExpense = (expID) => {
		props.onDeleteExpense(expID);
	};

	return (
		<Card className={classes.card}>
			<div className={classes.top}>
				<ExpenseFilter
					onFilterChanged={filterHandler}
					year={filteredYear}
				/>
			</div>
			<ExpensesList
				expenses={filteredExpenses}
				deleteExpense={finalOnDeleteExpense}
			/>
			<div className={classes.bottom}>
				<ExpensesBottom />
			</div>
		</Card>
	);
};

Expenses.propTypes = {
	items: PropTypes.array,
	data: PropTypes.array,
	onDeleteExpense: PropTypes.func,
};

export default Expenses;
