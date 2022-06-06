import React from 'react';
import Wrapper from './components/UI/Wrapper';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import AuthScreen from './components/Auth/AuthScreen';

const App = (props) => {
	return (
		<Wrapper>
			<Header />
			<AuthScreen />
			<Footer />
		</Wrapper>
	);
};

export default App;
