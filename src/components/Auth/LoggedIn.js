import React, { useState } from 'react';
import Expenses from '../Expenses/Expenses';
import NewExpense from '../NewExpense/NewExpense';
import PropTypes from 'prop-types';
import Stats from '../stats/Stats';

const LoggedIn = (props) => {
	const initExpenses = [
		// {
		// 	id: `exp-${Math.random() * 3}`,
		// 	title: 'Car Insurance',
		// 	date: new Date(2021, 8, 24),
		// 	amt: 302.95,
		// 	cat: 'Bill',
		// },
	];

	const [expenses, setExpenses] = useState(props.expenses.data);

	const addExpenseHandler = (createdExpense) => {
		// console.log(createdExpense);
		// setExpenses((prevState) => {
		// 	return [createdExpense, ...prevState];
		// });
	};

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Stats data={expenses}></Stats>
			<Expenses items={expenses} />
		</>
	);
};

LoggedIn.propTypes = {
	data: PropTypes.object,
	expenses: PropTypes.object,
};

export default LoggedIn;
