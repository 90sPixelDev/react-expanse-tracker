import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import EmailTextInput from '../SignForm/EmailTextInput';
import PasswordTextInput from '../SignForm/PasswordTextInput';

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.val,
			isValid: action.val.includes('@') && action.val.includes('.'),
		};
	}

	return { value: '', isValid: null };
};
const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return {
			value: action.val,
			isValid: action.val.length > 5,
		};
	}

	return { value: '', isValid: null };
};

const SignUpForm = (props) => {
	const classes = {
		form: 'flex flex-col gap-4',
		formTitle: 'mx-auto font-bold',
		focus: 'bg-gray-300 flex flex-col gap-4 p-2 rounded-lg',
		input: 'rounded-lg p-1 focus:bg-gray-100 ',
		signUpBtn:
			'bg-green-500 px-2 py-1 rounded-lg border-[1px] border-green-600 text-white sm:hover:bg-green-400 transition',
		signUpDisabled:
			'bg-green-200 px-2 py-1 rounded-lg border-[1px] border-green-300 text-gray-400 transition',
		logInBtn:
			'bg-gray-700 px-2 py-1 text-white rounded-lg border-[1px] border-gray-800 sm:hover:bg-gray-600 transition',
		or: 'mx-auto',
	};

	const [name, setName] = useState('');
	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: null,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
	});

	const changeName = (e) => {
		setName(e.target.value);
	};
	const changeEmail = (e) => {
		dispatchEmail({ type: 'USER_INPUT', val: e.target.value });

		setFormIsValid(
			passwordState.isValid &&
				e.target.value.includes('@') &&
				e.target.value.includes('.')
		);
	};
	const changePassword = (e) => {
		dispatchPassword({ type: 'USER_INPUT', val: e.target.value });

		setFormIsValid(emailState.isValid && e.target.value.length > 5);
	};

	const submitUserInfo = (e) => {
		e.preventDefault();
		const email = emailState.value;
		const password = passwordState.value;
		const userInfo = { name, email, password };
		setName('');
		dispatchEmail();
		dispatchPassword();
		props.onUserSignedUp(userInfo);
	};

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
					emailValidity={emailState.isValid}
					changeTheEmail={changeEmail}
				/>
				<PasswordTextInput
					passwordValidity={passwordState.isValid}
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
