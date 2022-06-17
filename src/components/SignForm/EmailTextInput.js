import React from 'react';
import PropTypes from 'prop-types';

const EmailTextInput = (props) => {
	const classes = {
		input: 'rounded-lg p-1 focus:bg-gray-100 ',
		inputValid: 'outline-green-400 bg-green-100',
		inputInvalid: 'outline-red-400',
	};

	const inputStyle = props.emailValidity
		? classes.inputValid
		: classes.inputInvalid;

	return (
		<input
			className={classes.input + inputStyle}
			type='email'
			name='email-input'
			onChange={props.changeTheEmail}
			placeholder='Email'
			required='required'
		></input>
	);
};

EmailTextInput.propTypes = {
	emailValidity: PropTypes.bool,
	changeTheEmail: PropTypes.func,
};

export default EmailTextInput;
