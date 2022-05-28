import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const ExpenseForm = (props) => {
	const classes = {
		form: 'max-w-[500px] h-full p-1 sm:p-5 m-auto grid place-items-center rounded-3xl',
		container: 'flex flex-col h-full justify-evenly',
		smScreenParent: 'w-full min-w-[300px] flex flex-row justify-center',
		controlParent: 'm-auto sm:p-1',
		label: 'flow-root text-center text-sm sm:text-base',
		input: 'w-[5em] sm:w-[8em] rounded-md p-1 border-2 border-gray-300',
		buttons: 'flex flex-row my-2',
		new: 'bg-white sm:hover:bg-gray-200 p-1 rounded-lg m-auto sm:p-2',
		submit: 'bg-green-200 sm:hover:bg-green-400 p-1 rounded-lg m-auto sm:p-2',
		cancel: 'bg-red-200 sm:hover:bg-red-400 p-1 rounded-lg m-auto sm:p-2',
	};

	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmt, setEnteredAmt] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	const [enteredCat, setEnteredCat] = useState('Other');

	const titleChangedHandler = (e) => {
		setEnteredTitle(e.target.value);
		console.log(e.target.value);
	};
	const amtChangedHandler = (e) => {
		setEnteredAmt(parseFloat(e.target.value));
		console.log(e.target.value);
	};
	const dateChangedHandler = (e) => {
		setEnteredDate(e.target.value);
		console.log(e.target.value);
	};
	const catChangedHandler = (e) => {
		setEnteredCat(e.target.value);
		console.log(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (enteredAmt === '' || enteredTitle === '' || enteredDate === '') {
			props.invalidSub();
			setEnteredTitle('');
			setEnteredAmt('');
			setEnteredDate('');
			return;
		}

		const expenseData = {
			title: enteredTitle,
			amt: enteredAmt,
			date: new Date(enteredDate),
			cat: enteredCat,
		};

		props.onNewExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmt('');
		setEnteredDate('');
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.container}>
				<div className={classes.smScreenParent}>
					<div className={classes.controlParent}>
						<label className={classes.label}>Title</label>
						<input
							className={classes.input}
							type='text'
							name='expense-title'
							value={enteredTitle}
							onChange={titleChangedHandler}
						/>
					</div>
					<div className={classes.controlParent}>
						<label className={classes.label}>Amount</label>
						<input
							className={classes.input}
							type='number'
							min='0.01'
							step='0.01'
							name='expense-amount'
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
							max='2022-06-01'
							name='expense-date'
							value={enteredDate}
							onChange={dateChangedHandler}
						/>
					</div>
					<div className={classes.controlParent}>
						<label className={classes.label}>Category</label>
						<select
							className={classes.input}
							name='expense-cat'
							onChange={catChangedHandler}
						>
							<option>Other</option>
							<option>Bill</option>
							<option>Food</option>
							<option>Fun</option>
							<option>Loan</option>
						</select>
					</div>
				</div>
				<div className={classes.buttons}>
					<button
						className={classes.cancel}
						type='button'
						onClick={props.revealFormHandler}
					>
						Cancel
					</button>
					<button className={classes.submit} type='submit'>
						Add Expense
					</button>
				</div>
			</div>
		</form>
	);
};

ExpenseForm.propTypes = {
	onNewExpenseData: PropTypes.func,
	onAdded: PropTypes.func,
	revealFormHandler: PropTypes.func,
	invalidSub: PropTypes.func,
};

export default ExpenseForm;
