import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Authorized from './Authorized';
import { UserIDCon } from '../Context/user-id-context';

const AuthScreen = (props) => {
	const updatingDataHandler = (expense) => {
		props.onFinalUpdate(expense);
	};

	const userID = useContext(UserIDCon);

	return (
		<Authorized
			expenses={props.data}
			userValue={userID}
			onUpdateData={updatingDataHandler}
		/>
	);
};

AuthScreen.propTypes = {
	data: PropTypes.object,
	onFinalUpdate: PropTypes.func,
};

export default AuthScreen;
