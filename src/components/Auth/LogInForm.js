import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import EmailTextInput from '../SignForm/EmailTextInput';
import PasswordTextInput from '../SignForm/PasswordTextInput';

const LogInForm = (props) => {
	const classes = {
		form: 'flex flex-col gap-4',
		formTitle: 'mx-auto font-bold',
		focus: 'bg-gray-300 flex flex-col gap-4 p-2 rounded-lg',
		signUpBtn:
			'bg-green-500 px-2 py-1 rounded-lg border-[1px] border-green-600 text-white sm:hover:bg-green-400 transition',
		logInBtn:
			'bg-gray-700 px-2 py-1 text-white rounded-lg border-[1px] border-gray-800 sm:hover:bg-gray-600 transition',
		logInDisabled:
			'bg-gray-500 px-2 py-1 text-gray-300 rounded-lg border-[1px] border-gray-800 sm:hover:bg-gray-600 transition',
		or: 'mx-auto',
	};

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [formIsValid, setFormIsValid] = useState(false);
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [passwordIsValid, setPasswordIsValid] = useState(false);

	const changeEmail = (e) => {
		setEmail(e.target.value);
	};
	const changePassword = (e) => {
		setPassword(e.target.value);
	};

	const userSignedIn = (e) => {
		e.preventDefault();
		const userInfo = { email, password };
		setEmail('');
		setPassword('');
		props.onUserSignedIn(userInfo);
	};

	const validateEmail = () => {
		if (email.includes('@') && email.includes('.')) {
			setEmailIsValid(true);
		} else {
			setEmailIsValid(false);
		}
	};
	const validatePassword = () => {
		if (password.trim().length > 5) {
			setPasswordIsValid(true);
		} else {
			setPasswordIsValid(false);
		}
	};

	useEffect(() => {
		const testValidity = setTimeout(() => {
			console.log(`TESTED: ${formIsValid}`);

			validateEmail();
			validatePassword();

			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			clearTimeout(testValidity);
		};
	}, [email, password]);

	const submitBtnType = () => {
		const btnType = formIsValid ? (
			<button
				className={classes.logInBtn}
				type='submit'
				onClick={userSignedIn}
			>
				Log In
			</button>
		) : (
			<button className={classes.logInDisabled} type='submit'>
				Log In
			</button>
		);
		return btnType;
	};

	return (
		<form className={classes.form}>
			<div className={classes.focus}>
				<h2 className={classes.formTitle}>Log In</h2>
				<EmailTextInput
					emailValidity={emailIsValid}
					changeTheEmail={changeEmail}
				/>
				<PasswordTextInput
					passwordValidity={passwordIsValid}
					changeThePassword={changePassword}
				/>
				{submitBtnType()}
			</div>

			<p className={classes.or}>Or</p>
			<button
				className={classes.signUpBtn}
				type='button'
				onClick={props.onSwitchForm}
			>
				Sign Up
			</button>
		</form>
	);
};

LogInForm.propTypes = {
	onSwitchForm: PropTypes.func,
	onUserSignedIn: PropTypes.func,
};

export default LogInForm;
