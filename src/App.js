import React, { useState, useEffect } from 'react';
import Wrapper from './components/UI/Wrapper';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import AuthScreen from './components/Auth/AuthScreen';
import { db } from './firebase.config';
import { collection, getDocs } from 'firebase/firestore';

const App = (props) => {
	const [expenses, setExpenses] = useState([{}]);
	const [update, setUpdate] = useState(false);
	const expensesCollectionRef = collection(db, 'expenses');

	useEffect(() => {
		const getExpenses = async () => {
			const data = await getDocs(expensesCollectionRef);

			setExpenses(
				data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		};

		getExpenses();
	}, [, update]);

	const refreshExpensesHandler = () => {
		setUpdate((prevState) => !prevState);
	};

	return (
		<Wrapper>
			<Header />
			<AuthScreen
				data={expenses}
				onFinalUpdate={refreshExpensesHandler}
			/>
			<Footer />
		</Wrapper>
	);
};

export default App;
