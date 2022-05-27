import React, { useState } from 'react';
import './tailwind.css';
import Expenses from './components/Expenses/Expenses';
import Wrapper from './components/UI/Wrapper';
import NewExpense from './components/NewExpense/NewExpense';
import Stats from './components/stats/Stats';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

const App = () => {
	const initExpenses = [
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Car Insurance',
			date: new Date(2021, 8, 24),
			amt: 302.95,
			cat: 'Bill',
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Mortgage',
			date: new Date(2022, 5, 8),
			amt: 980.45,
			cat: 'Bill',
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Cat Food',
			date: new Date(2020, 10, 16),
			amt: 45.33,
			cat: 'Food',
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Book',
			date: new Date(2022, 10, 20),
			amt: 70.53,
			cat: 'Fun',
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Cat Litter',
			date: new Date(2020, 7, 4),
			amt: 21.74,
			cat: 'Other',
		},
		{
			id: `exp-${Math.random() * 3}`,
			title: 'Walmart',
			date: new Date(2021, 2, 15),
			amt: 289.56,
			cat: 'Fun',
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
		<Wrapper>
			<Header />
			<NewExpense onAddExpense={addExpenseHandler} />
			<Stats data={expenses}></Stats>
			<Expenses items={expenses} />
			<Footer />
		</Wrapper>
	);
};

export default App;
