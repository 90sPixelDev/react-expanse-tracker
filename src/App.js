import React, { useState } from 'react';
import './tailwind.css';
import Expenses from './components/Expenses/Expenses';
import HomeBody from './components/UI/HomeBody';
import NewExpense from './components/NewExpense/NewExpense';
import Stats from './components/stats/Stats';
import Header from './components/UI/Header';

const App = () => {
	const initExpenses = [
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Car Insurance',
			date: new Date(2021, 8, 24),
			amt: 302.95,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Mortgage',
			date: new Date(2022, 5, 8),
			amt: 980.45,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Cat Food',
			date: new Date(2019, 10, 16),
			amt: 45.33,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Book',
			date: new Date(2022, 10, 20),
			amt: 70.53,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Cat Litter',
			date: new Date(2020, 7, 4),
			amt: 21.74,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Walmart',
			date: new Date(2021, 2, 15),
			amt: 289.56,
		},
	];

	const [expenses, setExpenses] = useState(initExpenses);

	const addExpenseHandler = (createdExpense) => {
		console.log(createdExpense);
		setExpenses((prevState) => {
			return [createdExpense, ...prevState];
		});
	};

	return (
		<HomeBody>
			<Header></Header>
			<Stats data={expenses}></Stats>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</HomeBody>
	);
};

export default App;
