import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesPageControl from './ExpensesPageControl';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	const classes = {
		card: 'bottom-4 m-5 bg-red-600 w-[90vw] sm:w-[620px] flex flex-col self-start min-h-min max-h-[55vh] overflow-auto transition',
		topBottom:
			'w-full bg-gradient-to-r from-transparent via-red-400 to-transparent py-1',
	};

	const [filteredYear, setFilteredYear] = useState('All');

	const filterHandler = (yearSelected) => {
		setFilteredYear(yearSelected);
	};

	const filteredExpenses = props.items.filter((expense) => {
		if (filteredYear === 'All') return expense;
		else return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<Card className={classes.card}>
			<div className={classes.topBottom}>
				<ExpenseFilter
					onFilterChanged={filterHandler}
					year={filteredYear}
				/>
			</div>
			<ExpensesList items={filteredExpenses} />
			<div className={classes.topBottom}>
				<ExpensesPageControl />
			</div>
		</Card>
	);
};

Expenses.propTypes = {
	items: PropTypes.array,
};

export default Expenses;
