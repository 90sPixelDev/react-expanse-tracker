import React from 'react';
import ExpenseForm from './ExpenseForm';
import PropTypes from 'prop-types';

const NewExpense = (props) => {
	const classes = {
		parent: '',
	};

	const newExpenseData = (enteredExpenseData) => {
		const expenseData = {
			id: `exp-${Math.random() * 3}`,
			...enteredExpenseData,
		};
		props.expenseAdded(expenseData);
	};

	return (
		<div className={classes.parent}>
			<ExpenseForm onAddExpense={newExpenseData} />
		</div>
	);
};

NewExpense.propTypes = {
	expenseAdded: PropTypes.func,
};

export default NewExpense;
