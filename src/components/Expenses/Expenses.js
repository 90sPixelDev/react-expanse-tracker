import React, { useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';

const Expenses = (props) => {
	const classes = {
		card: 'm-5 p-5 bg-red-600 w-[90vw] sm:w-[620px] flex flex-col gap-4 self-start',
	};

	const [filteredYear, setFilteredYear] = useState('2022');

	console.log(filteredYear);

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
			{filteredExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amt}
					date={expense.date}
				></ExpenseItem>
			))}
		</Card>
	);
};

Expenses.propTypes = {
	items: PropTypes.array,
};

export default Expenses;
