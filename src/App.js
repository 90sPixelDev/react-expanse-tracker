import React, { useState } from 'react';
import './tailwind.css';
import Expenses from './components/Expenses/Expenses';
import HomeBody from './components/UI/HomeBody';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	const [expenses, setExpenses] = useState([
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Car Insurance',
			date: new Date(2021, 8, 24),
			amt: 302.95,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Mortgage',
			date: new Date(2021, 5, 8),
			amt: 980.45,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Cat Food',
			date: new Date(2021, 10, 16),
			amt: 45.33,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Cat Litter',
			date: new Date(2021, 7, 4),
			amt: 21.74,
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Walmart',
			date: new Date(2021, 2, 15),
			amt: 289.56,
		},
	]);

	const addExpenseHandler = (createdExpense) => {
		console.log(createdExpense);
		const newExpense = {
			id: createdExpense.id,
			title: createdExpense.enteredTitle,
			amt: createdExpense.enteredAmt,
			date: createdExpense.enteredDate,
		};
		setExpenses((prevState) => {
			prevState.push(newExpense);
			return prevState;
		});
		console.log(expenses);
	};

	return (
		<HomeBody>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</HomeBody>
	);
};

export default App;
