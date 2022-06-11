import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './components/UI/Wrapper';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase.config';
import AuthScreen from './components/Auth/AuthScreen';
import SignFormParent from './components/Auth/SignFormParent';
import SignUpForm from './components/Auth/SignUpForm';
import LogInForm from './components/Auth/LogInForm';
import { UserIDCon } from './components/Auth/UserIDContext';

const App = (props) => {
	const [validUser, setValidUser] = useState(false);
	const [isNewUser, setIsNewUser] = useState(true);

	const refreshExpensesHandler = () => {
		setUpdate((prevState) => !prevState);
	};

	const createAccount = async (userInfo) => {
		console.log(userInfo);
		createUserWithEmailAndPassword(
			auth,
			userInfo.email,
			userInfo.password
		)
			.then((userCreds) => {
				setValidUser(userCreds.user);
			})
			.catch((error) => {
				const errCode = error.code;
				const errMssg = error.message;
				console.log(`${errCode}: ${errMssg}`);
			});
	};
	const LogIntoAccount = async (userInfo) => {
		signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
			.then((userCreds) => {
				setValidUser(userCreds.user);
			})
			.catch((error) => {
				const errCode = error.code;
				const errMssg = error.message;
				console.log(`${errCode}: ${errMssg}`);
			});
	};

	const changeFormHandler = () => {
		console.log('Changing Form!');
		setIsNewUser((prevState) => !prevState);
	};

	return (
		<>
			<Header />
			<Wrapper>
				{!validUser ? (
					<SignFormParent props={props}>
						{isNewUser ? (
							<SignUpForm
								onUserSignedUp={createAccount}
								onSwitchForm={changeFormHandler}
							/>
						) : (
							<LogInForm
								onUserSignedIn={LogIntoAccount}
								onSwitchForm={changeFormHandler}
							/>
						)}
					</SignFormParent>
				) : (
					<UserIDCon.Provider value={validUser}>
						<AuthScreen
							data={props}
							onFinalUpdate={refreshExpensesHandler}
						/>
					</UserIDCon.Provider>
				)}
				<Footer />
			</Wrapper>
		</>
	);
};

App.propTypes = {
	children: PropTypes.node,
};

export default App;
