import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoggedIn from './LoggedIn';

const AuthScreen = (props) => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	const loggedOut = (
		<div>
			<h2>Please Log In to access features!</h2>
		</div>
	);

	return <>{isAuthenticated ? <LoggedIn /> : loggedOut}</>;
};

export default AuthScreen;
