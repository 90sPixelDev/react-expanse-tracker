import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpenseForm = (props) => {
	const classes = {
		form: 'bg-red-600 p-5 m-1 flex rounded-full shadow-md',
		smScreenParent:
			'w-[30vw] min-w-[150px] flex flex-col justify-center sm:flex-row',
		controlParent: 'm-auto p-3',
		label: 'text-white flow-root text-center',
		input: 'w-full rounded-md',
		amtInput: 'w-[70px] rounded-lg m-auto flow-root',
		submit: 'bg-red-50 p-3 rounded-full hover:bg-red-100 m-auto flow-root',
	};
	// const [enteredTitle, setEnteredTitle] = useState('');
	// const [enteredAmt, setEnteredAmt] = useState('');
	// const [enteredDate, setEnteredDate] = useState('');

	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmt, setEnteredAmt] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const titleChangedHandler = (e) => {
		setEnteredTitle(e.target.value);
	};
	const amtChangedHandler = (e) => {
		setEnteredAmt(e.target.value);
	};
	const dateChangedHandler = (e) => {
		setEnteredDate(e.target.value);
		console.log(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amt: enteredAmt,
			date: new Date(enteredDate),
		};

		props.onNewExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmt('');
		setEnteredDate('');
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.smScreenParent}>
				<div className={classes.controlParent}>
					<label className={classes.label}>Title</label>
					<input
						className={classes.input}
						type='text'
						name='expense-title'
						required
						value={enteredTitle}
						onChange={titleChangedHandler}
					/>
				</div>
				<div className={classes.controlParent}>
					<label className={classes.label}>Amount</label>
					<input
						className={classes.amtInput}
						type='number'
						min='0.01'
						step='0.01'
						name='expense-amount'
						required
						value={enteredAmt}
						onChange={amtChangedHandler}
					/>
				</div>
			</div>
			<div className={classes.smScreenParent}>
				<div className={classes.controlParent}>
					<label className={classes.label}>Date</label>
					<input
						className={classes.input}
						type='date'
						min='2019-01-01'
						max='2022-6-1'
						name='expense-date'
						required
						value={enteredDate}
						onChange={dateChangedHandler}
					/>
				</div>
				<div className={classes.controlParent}>
					<button className={classes.submit} type='submit'>
						Add
					</button>
				</div>
			</div>
		</form>
	);
};

ExpenseForm.propTypes = {
	onNewExpenseData: PropTypes.func,
};

export default ExpenseForm;
