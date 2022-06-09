import React, { useEffect, useRef } from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
import autoAnimate from '@formkit/auto-animate';

const ExpensesList = (props) => {
	const classes = {
		expenses:
			'flex flex-col flex-nowrap gap-4 items-center self-start overflow-auto w-[100%] bg-gradient-to-r from-white via-black/10 to-white py-3 sm:h-[50vh] h-[70vh] border-gray-300 border-x-2',
		noContent: 'm-auto font-bold',
	};
	const expensesParentRef = useRef(null);
	useEffect(() => {
		expensesParentRef.current && autoAnimate(expensesParentRef.current);
	}, [expensesParentRef]);

	let expensesContent = (
		<p className={classes.noContent}>No expenses found.</p>
	);

	if (props.expenses && props.expenses.length > 0) {
		expensesContent = props.expenses?.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={parseFloat(expense.amt)}
				date={expense.date.toDate()}
				category={expense.cat}
			/>
		));
	}

	return (
		<ul className={classes.expenses} ref={expensesParentRef}>
			{expensesContent}
		</ul>
	);
};

ExpensesList.propTypes = {
	expenses: PropTypes.any,
};

export default ExpensesList;
