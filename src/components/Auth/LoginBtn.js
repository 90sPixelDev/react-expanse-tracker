import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginBtn = () => {
	const classes = {
		button: 'bg-green-100 px-2 py-1 rounded-md hover:bg-green-300',
	};

	const { loginWithRedirect } = useAuth0();

	return (
		<button
			className={classes.button}
			onClick={() => loginWithRedirect()}
		>
			Login
		</button>
	);
};

export default LoginBtn;
