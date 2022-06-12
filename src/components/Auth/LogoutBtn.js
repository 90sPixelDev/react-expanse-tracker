import React from 'react';

const LogoutButton = () => {
	const classes = {
		button: 'bg-red-200 px-2 py-1 rounded-md hover:bg-red-300',
	};

	return (
		<button
			className={classes.button}
			// onClick={() => logout({ returnTo: window.location.origin })}
		>
			Log Out
		</button>
	);
};

export default LogoutButton;
