import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const ExpenseForm = (props) => {
	const classes = {
		form: 'max-w-[500px] h-fit p-1 sm:p-5 m-auto grid place-items-center rounded-3xl',
		container: 'flex flex-col h-full justify-evenly',
		smScreenParent: 'w-full min-w-[300px] flex flex-row justify-center',
		controlParent: 'm-auto sm:p-1',
		label: 'flow-root text-center text-sm sm:text-base',
		input: 'w-[5em] sm:w-[8em] rounded-md p-1 border-2 border-gray-300',
		buttons: 'flex flex-row mt-2 mb-6',
		new: 'bg-white sm:hover:bg-gray-200 p-1 rounded-lg m-auto sm:p-2',
		submit: 'bg-green-200 sm:hover:bg-green-400 p-1 rounded-lg m-auto sm:p-2',
		cancel: 'bg-red-200 sm:hover:bg-red-400 p-1 rounded-lg m-auto sm:p-2',
	};

	const enteredTitleRef = useRef();
	const enteredAmtRef = useRef();
	const enteredDateRef = useRef();
	const enteredCatRef = useRef();

	const resetForm = () => {
		enteredAmtRef.current.value = '';
		enteredTitleRef.current.value = '';
		enteredDateRef.current.value = '';
		enteredCatRef.current.value = '';
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const enteredAmt = enteredAmtRef.current.value;
		const enteredTitle = enteredTitleRef.current.value;
		const enteredDate = enteredDateRef.current.value;
		const enteredCat = enteredCatRef.current.value;

		if (enteredAmt === '' || enteredTitle === '' || enteredDate === '') {
			props.invalidSub();
			resetForm();
			return;
		}

		let cat;
		if (
			enteredCat === '' ||
			enteredCat === null ||
			enteredCat === undefined
		) {
			cat = 'Other';
		} else {
			cat = enteredCat;
		}

		const expenseData = {
			title: enteredTitle,
			amt: parseFloat(enteredAmt),
			date: new Date(enteredDate),
			cat: cat,
		};

		props.onNewExpenseData(expenseData);
		resetForm();
	};

	const getCurrentDate = () => {
		const currDate = new Date()
			.toISOString()
			.replace(/T.*/, '')
			.split('-')
			.join('-');
		return currDate;
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
							ref={enteredTitleRef}
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
							ref={enteredAmtRef}
						/>
					</div>
				</div>
				<div className={classes.smScreenParent}>
					<div className={classes.controlParent}>
						<label className={classes.label}>Date</label>
						<input
							className={classes.input}
							type='date'
							min='2000-01-01'
							max={getCurrentDate()}
							name='expense-date'
							ref={enteredDateRef}
						/>
					</div>
					<div className={classes.controlParent}>
						<label className={classes.label}>Category</label>
						<select
							className={classes.input}
							name='expense-cat'
							ref={enteredCatRef}
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
