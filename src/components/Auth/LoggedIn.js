import React, { useState } from 'react';
import Expenses from '../Expenses/Expenses';
import NewExpense from '../NewExpense/NewExpense';
import Stats from '../stats/Stats';
import AuthBtn from './AuthBtn';

const LoggedIn = () => {
	const initExpenses = [
		// {
		// 	id: `exp-${Math.random() * 3}`,
		// 	title: 'Car Insurance',
		// 	date: new Date(2021, 8, 24),
		// 	amt: 302.95,
		// 	cat: 'Bill',
		// },
	];

	const [expenses, setExpenses] = useState(initExpenses);

	const addExpenseHandler = (createdExpense) => {
		console.log(createdExpense);
		setExpenses((prevState) => {
			return [createdExpense, ...prevState];
		});
	};

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Stats data={expenses}></Stats>
			<Expenses items={expenses} />
		</>
	);
};

export default LoggedIn;
