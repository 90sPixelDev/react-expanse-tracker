import React from 'react';
import './tailwind.css';
import ExpenseItemParent from './components/Expenses/ExpenseItemParent';
import HomeBody from './components/UI/HomeBody';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	return (
		<HomeBody>
			<NewExpense />
			<ExpenseItemParent />
		</HomeBody>
	);
};

export default App;
