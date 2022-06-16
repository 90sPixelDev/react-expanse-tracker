import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LogInForm = (props) => {
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

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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

	return (
		<form className={classes.form}>
			<div className={classes.focus}>
				<h2 className={classes.formTitle}>Log In</h2>
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
					className={classes.logInBtn}
					type='submit'
					onClick={userSignedIn}
				>
					Log In
				</button>
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
