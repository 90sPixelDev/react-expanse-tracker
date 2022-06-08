import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import LoggedIn from './LoggedIn';

const AuthScreen = (props) => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	const loggedOut = (
		<div>
			<h2>Please Log In to access features!</h2>
		</div>
	);
	if (isLoading) {
		return <div>Loading ...</div>;
	}

	const updatingDataHandler = (expense) => {
		props.onFinalUpdate(expense);
	};

	return (
		<>
			{isAuthenticated ? (
				<LoggedIn
					expenses={props.data}
					onUpdateData={updatingDataHandler}
				/>
			) : (
				loggedOut
			)}
		</>
	);
};

AuthScreen.propTypes = { data: PropTypes.array, onFinalUpdate: PropTypes.func };

export default AuthScreen;
