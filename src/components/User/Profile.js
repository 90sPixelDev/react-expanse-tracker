import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const Profile = () => {
	const classes = {
		holder: 'bg-gray-100 rounded-lg p-2 items-center',
		parent: 'flex flex-col border-b-[1px] border-gray-500',
		loading: 'bg-gray-100 rounded-lg p-2',
		pic: 'rounded-full h-[25px] w-[25px] flow-root mx-auto',
		name: 'text-[12px]',
		email: 'text-[12px]',
	};

	const [showProfile, setShowProfile] = useState(false);

	return (
		<>
			<button
				className={classes.holder}
				onClick={() => setShowProfile((prevState) => !prevState)}
			>
				<img
					className={classes.pic}
					src={user.picture}
					alt={user.name}
				/>
				<Transition
					as='div'
					className={classes.parent}
					show={showProfile}
					enter='transition-all duration-500'
					enterFrom='opacity-0 h-[0px]'
					enterTo='opacity-100 h-[35px]'
					leave='transition-all duration-500'
					leaveFrom='opacity-100 h-[35px]'
					leaveTo='opacity-0 h-[0px]'
				>
					<h2 className={classes.name}>{user.name}</h2>
					<p className={classes.email}>{user.email}</p>
				</Transition>
			</button>
		</>
	);
};

export default Profile;
