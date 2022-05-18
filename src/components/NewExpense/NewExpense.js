import React from 'react';
import ExpenseForm from './ExpenseForm';
import PropTypes from 'prop-types';

const NewExpense = (props) => {
	const classes = {
		parent: '',
	};

	const newExpenseData = (enteredExpenseData) => {
		const expenseData = {
			id: `exp-${Math.random() * 1}`,
			...enteredExpenseData,
		};
		props.onAddExpense(expenseData);
	};

	return (
		<div className={classes.parent}>
			<ExpenseForm onNewExpenseData={newExpenseData} />
		</div>
	);
};

NewExpense.propTypes = {
	onAddExpense: PropTypes.func,
};

export default NewExpense;
