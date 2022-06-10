import React, { useState, useEffect } from 'react';
import Wrapper from './components/UI/Wrapper';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import AuthScreen from './components/Auth/AuthScreen';

const App = (props) => {
	const refreshExpensesHandler = () => {
		setUpdate((prevState) => !prevState);
	};

	return (
		<>
			<Header />
			<Wrapper>
				<AuthScreen
					data={props}
					onFinalUpdate={refreshExpensesHandler}
				/>
				<Footer />
			</Wrapper>
		</>
	);
};

export default App;
