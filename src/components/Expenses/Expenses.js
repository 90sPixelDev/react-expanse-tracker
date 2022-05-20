import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import ExpensesPageControl from '../UI/ExpensesPageControl';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Expenses = (props) => {
	const classes = {
		card: 'bottom-4 m-5 bg-red-600 w-[90vw] sm:w-[620px] flex flex-col self-start min-h-min max-h-[55vh] overflow-auto transition',
		expenses:
			'flex flex-col gap-4 self-start overflow-auto w-[100%] bg-gradient-to-r from-red-600 via-red-700 to-red-600 py-3',
		topBottom:
			'w-full bg-gradient-to-r from-transparent via-red-400 to-transparent py-1',
	};

	const [animParent] = useAutoAnimate();

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
			<div className={classes.expenses} ref={animParent}>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amt}
						date={expense.date}
					></ExpenseItem>
				))}
			</div>
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
