import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoggedIn from './LoggedIn';

const AuthScreen = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	const loggedOut = (
		<div>
			<h2>Please Log In to access features!</h2>
		</div>
	);

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return <>{isAuthenticated ? <LoggedIn /> : loggedOut}</>;
};

export default AuthScreen;
