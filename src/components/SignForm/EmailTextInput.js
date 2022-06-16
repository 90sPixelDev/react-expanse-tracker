import React from 'react';
import PropTypes from 'prop-types';

const EmailTextInput = (props) => {
	const classes = {
		input: 'rounded-lg p-1 ',
		inputValid: 'outline-green-400',
		inputInvalid: 'outline-red-400',
	};

	const inputStyle = !props.emailValidity
		? classes.inputInvalid
		: classes.input;

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
