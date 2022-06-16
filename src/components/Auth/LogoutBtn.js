import React from 'react';
import { auth } from '../../firebase.config';
import { signOut } from 'firebase/auth';

const LogoutButton = () => {
	const classes = {
		button: 'bg-red-200 px-2 py-1 rounded-md hover:bg-red-300',
	};

	const SignOutHandler = () => {
		signOut(auth)
			.then(() => {
				console.log('Signed out Successfully!');
				window.location.reload(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<button className={classes.button} onClick={SignOutHandler}>
			Log Out
		</button>
	);
};

export default LogoutButton;
