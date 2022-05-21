import React, { useRef, useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import PropTypes from 'prop-types';
import autoAnimate from '@formkit/auto-animate';

const NewExpense = (props) => {
	const classes = {
		section: 'max-w-[500px] min-w-[250px] h-full',
		sectionNew: 'h-[90%] w-[90%] bg-red-600 rounded-3xl',
		parent: 'w-full w-full h-full grid place-items-center rounded-3xl',
		button: 'bg-white sm:hover:bg-gray-200 rounded-lg w-max h-max py-1 px-2',
	};
	const [revealedForm, setRevealedForm] = useState(false);
	const animParent = useRef(null);

	const newExpenseData = (enteredExpenseData) => {
		const expenseData = {
			id: `exp-${Math.random() * 1}`,
			...enteredExpenseData,
		};
		props.onAddExpense(expenseData);
	};

	useEffect(() => {
		animParent.current && autoAnimate(animParent.current);
	}, [animParent]);

	const RevealFormHandler = () => setRevealedForm(!revealedForm);

	const hold = (
		<div>
			<button className={classes.submit} onClick={RevealFormHandler}>
				Add Expense
			</button>
		</div>
	);

	return (
		<section className={classes.sectionNew} ref={animParent}>
			{!revealedForm && (
				<div className={classes.parent}>
					<button
						className={classes.button}
						onClick={RevealFormHandler}
					>
						Add Expense
					</button>
				</div>
			)}
			{revealedForm && (
				<ExpenseForm
					onNewExpenseData={newExpenseData}
					revealFormHandler={RevealFormHandler}
				/>
			)}
		</section>
	);
};

NewExpense.propTypes = {
	onAddExpense: PropTypes.func,
};

export default NewExpense;
