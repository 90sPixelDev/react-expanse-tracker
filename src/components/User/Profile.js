import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
	const classes = {
		parent: 'bg-gray-100 rounded-lg flex flex-row gap-4 p-2 items-center',
		loading: 'bg-gray-100 rounded-lg p-2',
		pic: 'rounded-full h-[50px]',
	};

	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div className={classes.loading}>Loading ...</div>;
	}

	return (
		<>
			<div className={classes.parent}>
				<img
					className={classes.pic}
					src={user.picture}
					alt={user.name}
				/>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		</>
	);
};

export default Profile;
