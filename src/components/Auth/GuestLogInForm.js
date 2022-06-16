import React, { useState } from 'react';
import PropTypes from 'prop-types';

const GuestLogInForm = (props) => {
	const classes = {
		form: 'flex flex-col',
		title: 'text-center mb-2',
		note: 'text-gray-500 text-center text-sm',
		input: 'rounded-lg p-1',
		guestBtn:
			'bg-green-500 px-2 py-1 rounded-lg border-[1px] border-green-600 text-white sm:hover:bg-green-400 transition',
	};

	return (
		<form className={classes.form}>
			<h2 className={classes.title}>Want a quick look ?</h2>
			<p className={classes.note}>
				* All guest use same account that edit expenses
			</p>
			<button
				className={classes.guestBtn}
				type='button'
				onClick={props.onGuestLogIn}
			>
				Continue as Guest
			</button>
		</form>
	);
};

GuestLogInForm.propTypes = {
	onGuestLogIn: PropTypes.func,
};

export default GuestLogInForm;
