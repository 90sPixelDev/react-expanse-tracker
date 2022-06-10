import React, { useRef, useState, useEffect } from 'react';
import ExpenseForm from './ExpenseForm';
import PropTypes from 'prop-types';
import autoAnimate from '@formkit/auto-animate';
import Modal from '../UI/Modal';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

const NewExpense = (props) => {
	const classes = {
		sectionNew:
			'mb-2 h-[90%] w-[90%] max-w-[450px] bg-gray-100 border-2 border-gray-200 rounded-3xl',
		parent: 'w-full w-full h-full grid place-items-center rounded-3xl',
		button: 'bg-white sm:hover:bg-gray-200 rounded-lg w-max h-max py-1 px-2',
	};
	const [revealedForm, setRevealedForm] = useState(false);
	const animParent = useRef(null);

	const expensesCollectionRef = collection(db, 'expenses');

	const newExpenseData = async (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
		};
		await addDoc(expensesCollectionRef, { ...expenseData });
		props.onAddExpense({ ...expenseData });
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

	const [invalid, setInvalid] = useState(false);
	const error = () => {
		setInvalid((prevState) => !prevState);
	};

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
					invalidSub={error}
				/>
			)}
			{invalid && <Modal finalConfirm={error} />}
		</section>
	);
};

NewExpense.propTypes = {
	onAddExpense: PropTypes.func,
};

export default NewExpense;
