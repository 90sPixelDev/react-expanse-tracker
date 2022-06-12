import React from 'react';

const LoginBtn = () => {
	const classes = {
		button: 'bg-green-100 px-2 py-1 rounded-md hover:bg-green-300',
	};

	return (
		<button
			className={classes.button}
			// onClick={() => loginWithRedirect()}
		>
			Login
		</button>
	);
};

export default LoginBtn;
