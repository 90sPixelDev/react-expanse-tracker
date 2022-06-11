import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoggedIn from './LoggedIn';
import Loading from '../animations/Loading';
import { UserIDCon } from '../Auth/UserIDContext';

const AuthScreen = (props) => {
	const [isLoading, setIsLoading] = useState(true);

	// if (isLoading) {
	// 	return <Loading color={'gray'} size={56} />;
	// }

	const updatingDataHandler = (expense) => {
		props.onFinalUpdate(expense);
	};

	return (
		<UserIDCon.Consumer>
			{(value) => (
				<LoggedIn
					expenses={props.data}
					value={value}
					onUpdateData={updatingDataHandler}
				/>
			)}
		</UserIDCon.Consumer>
	);
};

AuthScreen.propTypes = {
	data: PropTypes.object,
	onFinalUpdate: PropTypes.func,
};

export default AuthScreen;
