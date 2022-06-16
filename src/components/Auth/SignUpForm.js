import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import EmailTextInput from '../SignForm/EmailTextInput';
import PasswordTextInput from '../SignForm/PasswordTextInput';

const SignUpForm = (props) => {
	const classes = {
		form: 'flex flex-col gap-4',
		formTitle: 'mx-auto font-bold',
		focus: 'bg-gray-300 flex flex-col gap-4 p-2 rounded-lg',
		input: 'rounded-lg p-1',
		signUpBtn:
			'bg-green-500 px-2 py-1 rounded-lg border-[1px] border-green-600 text-white sm:hover:bg-green-400 transition',
		signUpDisabled:
			'bg-green-200 px-2 py-1 rounded-lg border-[1px] border-green-300 text-gray-400 transition',
		logInBtn:
			'bg-gray-700 px-2 py-1 text-white rounded-lg border-[1px] border-gray-800 sm:hover:bg-gray-600 transition',
		or: 'mx-auto',
	};

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emailIsValid, setEmailIsValid] = useState(false);
	const [password, setPassword] = useState('');
	const [passwordIsValid, setPasswordIsValid] = useState(false);
	const [formIsValid, setFormIsValid] = useState(false);

	const changeName = (e) => {
		setName(e.target.value);
	};
	const changeEmail = (e) => {
		setEmail(e.target.value);
	};
	const changePassword = (e) => {
		setPassword(e.target.value);
	};

	const submitUserInfo = (e) => {
		e.preventDefault();
		const userInfo = { name, email, password };
		setName('');
		setEmail('');
		setPassword('');
		props.onUserSignedUp(userInfo);
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
				className={classes.signUpBtn}
				type='submit'
				onClick={submitUserInfo}
			>
				Sign Up
			</button>
		) : (
			<button className={classes.signUpDisabled} type='submit'>
				Sign Up
			</button>
		);
		return btnType;
	};

	return (
		<form className={classes.form}>
			<div className={classes.focus}>
				<h2 className={classes.formTitle}>Sign Up</h2>
				<input
					className={classes.input}
					type='name'
					name='name-input'
					placeholder='Name'
					onChange={changeName}
					required='required'
				></input>
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
				className={classes.logInBtn}
				type='button'
				onClick={props.onSwitchForm}
			>
				Log In
			</button>
		</form>
	);
};

SignUpForm.propTypes = {
	onUserSignedUp: PropTypes.func,
	onSwitchForm: PropTypes.func,
};

export default SignUpForm;
