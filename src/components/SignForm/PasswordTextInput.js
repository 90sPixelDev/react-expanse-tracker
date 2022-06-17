import React from 'react';
import PropTypes from 'prop-types';

const PasswordTextInput = (props) => {
	const classes = {
		input: 'rounded-lg p-1 focus:bg-gray-100 ',
		inputValid: 'outline-green-400 bg-green-100',
		inputInvalid: 'outline-red-400',
	};

	const inputStyle = props.passwordValidity
		? classes.inputValid
		: classes.inputInvalid;

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
