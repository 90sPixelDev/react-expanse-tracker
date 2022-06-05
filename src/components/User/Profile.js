import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
	const classes = {
		parent: 'bg-gray-100',
		loading: 'bg-gray-100 rounded-lg',
	};

	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div className={classes.loading}>Loading ...</div>;
	}

	if (user === null) console.log('No User');

	const profile = (
		<div className={classes.parent}>
			<img src={user.picture} alt={user.name} />
			<h2>{user.name}</h2>
			<p>{user.email}</p>
		</div>
	);

	const noProfile = (
		<div>
			<h2>NO USER</h2>
		</div>
	);

	return (
		<>
			{isAuthenticated && profile}
			{!isAuthenticated && noProfile}
		</>
	);
};

export default Profile;
