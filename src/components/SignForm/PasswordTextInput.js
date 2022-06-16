import React from 'react';
import PropTypes from 'prop-types';

const PasswordTextInput = (props) => {
	const classes = {
		input: 'rounded-lg p-1 ',
		inputValid: 'outline-green-400',
		inputInvalid: 'outline-red-400',
	};

	const inputStyle = !props.passwordValidity
		? classes.inputInvalid
		: classes.input;

	return (
		<input
			className={classes.input + inputStyle}
			type='password'
			name='password-input'
			onChange={props.changeThePassword}
			placeholder='Password'
			required='required'
		></input>
	);
};

PasswordTextInput.propTypes = {
	passwordValidity: PropTypes.bool,
	changeThePassword: PropTypes.func,
};

export default PasswordTextInput;
