import React from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';

const ExpensesList = (props) => {
	const classes = {
		expenses:
			'flex flex-col gap-4 self-start overflow-auto w-[100%] bg-gradient-to-r from-red-600 via-red-700 to-red-600 py-3',
		noContent: 'm-auto text-white',
	};

	let expensesContent = (
		<p className={classes.noContent}>No expenses found.</p>
	);

	if (props.items.length > 0) {
		expensesContent = props.items.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amt}
				date={expense.date}
			/>
		));
	}

	return <ul className={classes.expenses}>{expensesContent}</ul>;
};

ExpensesList.propTypes = {
	items: PropTypes.array,
};

export default ExpensesList;
