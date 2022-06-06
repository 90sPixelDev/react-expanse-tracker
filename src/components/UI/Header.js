import React from 'react';
import Profile from '../User/Profile';
import AuthBtn from '../Auth/AuthBtn';

const Header = () => {
	const classes = {
		header: 'w-full h-full bg-gray-500',
		menu: 'h-full',
		listParent: 'flex h-full justify-evenly items-center',
		listItem: 'text-white w-[33%] text-center py-3',
		listLog: 'w-[33%] text-center py-3',
		listProfile: 'w-[50%] text-center py-3',
	};

	return (
		<header className={classes.header}>
			<nav className={classes.menu}>
				<ul className={classes.listParent}>
					<li className={classes.listItem}>MinExpense</li>
					<li className={classes.listProfile}>
						<Profile />
					</li>
					<li className={classes.listLog}>
						<AuthBtn />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
