import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Authorized from './Authorized';
import Loading from '../animations/Loading';
import { UserIDCon } from '../Auth/UserIDContext';

const AuthScreen = (props) => {
	const updatingDataHandler = (expense) => {
		props.onFinalUpdate(expense);
	};

	return (
		<UserIDCon.Consumer>
			{(value) => (
				<Authorized
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
