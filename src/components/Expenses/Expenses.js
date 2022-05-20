import React, { useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesPageControl from '../UI/ExpensesPageControl';

const Expenses = (props) => {
	const classes = {
		card: 'm-5 bg-red-600 w-[90vw] sm:w-[620px] flex flex-col gap-2 self-start min-h-min max-h-[55vh] overflow-auto border-2 border-red-600 transition',
		expenses: 'flex flex-col gap-4 self-start overflow-auto w-[100%]',
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
			<ExpenseFilter
				onFilterChanged={filterHandler}
				year={filteredYear}
			/>
			<Card className={classes.expenses}>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amt}
						date={expense.date}
					></ExpenseItem>
				))}
			</Card>
			<ExpensesPageControl />
		</Card>
	);
};

Expenses.propTypes = {
	items: PropTypes.array,
};

export default Expenses;
