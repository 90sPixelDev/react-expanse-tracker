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
import { UserIDCon } from './components/Context/user-id-context';
import GuestLogInForm from './components/Auth/GuestLogInForm';

const App = (props) => {
	const classes = {
		or: 'text-center',
		wrapper: 'absolute h-[100%] w-[100%]',
		testBtn: 'bg-red-300',
	};

	const [validUser, setValidUser] = useState(false);
	const [isNewUser, setIsNewUser] = useState(true);

	const refreshExpensesHandler = () => {
		setUpdate((prevState) => !prevState);
	};

	const GuestLogIn = async () => {
		signInWithEmailAndPassword(auth, 'preview@gmail.com', 'tester')
			.then((userCreds) => {
				setValidUser(userCreds.user);
			})
			.catch((error) => {
				const errCode = error.code;
				const errMssg = error.message;
				console.log(`${errCode}: ${errMssg}`);
			});
	};
	const createAccount = async (userInfo) => {
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
				console.log(`${errCode} | ${errMssg}`);
			});
	};

	const changeFormHandler = () => {
		setIsNewUser((prevState) => !prevState);
	};

	return (
		<div className={classes.wrapper}>
			<Header />
			<Wrapper>
				{!validUser ? (
					<SignFormParent props={props}>
						<GuestLogInForm onGuestLogIn={GuestLogIn} />
						<h2 className={classes.or}>Or</h2>
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
			</Wrapper>
			<Footer />
		</div>
	);
};

App.propTypes = {
	children: PropTypes.node,
};

export default App;
