import React, { useState, useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
	const classes = {
		holder: 'bg-gray-100 rounded-lg p-2 items-center',
		parent: 'flex flex-col gap-2 overflow-hidden transition duration-1000',
		parentMaximized: 'w-full h-full',
		parentMinimized: 'w-[25px] h-[25px]',
		loading: 'bg-gray-100 rounded-lg p-2',
		pic: 'rounded-full h-[25px] w-fit flow-root mx-auto',
		name: 'text-[12px]',
		email: 'text-[12px]',
	};

	const { user, isLoading } = useAuth0();
	const [showProfile, setShowProfile] = useState(false);

	if (isLoading) {
		return <div className={classes.loading}>Loading ...</div>;
	}

	const showProfileHandler = () => {
		setShowProfile((prevState) => !prevState);
	};

	return (
		<>
			<button className={classes.holder} onClick={showProfileHandler}>
				<div
					className={`${classes.parent} ${
						showProfile ? 'h-full' : 'h-[25px]'
					}`}
				>
					<img
						className={classes.pic}
						src={user.picture}
						alt={user.name}
					/>
					<h2 className={classes.name}>{user.name}</h2>
					<p className={classes.email}>{user.email}</p>
				</div>
			</button>
		</>
	);
};

export default Profile;
