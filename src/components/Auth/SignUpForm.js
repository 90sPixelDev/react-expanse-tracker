import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SignUpForm = (props) => {
	const classes = {
		form: 'flex flex-col gap-4',
		formTitle: 'mx-auto',
		focus: 'bg-gray-300 flex flex-col gap-4 p-2 rounded-lg',
		input: 'rounded-lg p-1',
		signUpBtn:
			'bg-green-500 px-2 py-1 rounded-lg border-[1px] border-green-600 text-white sm:hover:bg-green-400 transition',
		logInBtn:
			'bg-gray-700 px-2 py-1 text-white rounded-lg border-[1px] border-gray-800 sm:hover:bg-gray-600 transition',
		or: 'mx-auto',
	};

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
				<input
					className={classes.input}
					type='email'
					name='email-input'
					onChange={changeEmail}
					placeholder='Email'
					required='required'
				></input>
				<input
					className={classes.input}
					type='password'
					name='password-input'
					onChange={changePassword}
					placeholder='Password'
					required='required'
				></input>
				<button
					className={classes.signUpBtn}
					type='submit'
					onClick={submitUserInfo}
				>
					Sign Up
				</button>
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
