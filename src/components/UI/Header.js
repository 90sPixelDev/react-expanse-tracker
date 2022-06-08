import React from 'react';
import Profile from '../User/Profile';
import AuthBtn from '../Auth/AuthBtn';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
	const classes = {
		header: 'w-full h-[60px] bg-gray-500',
		menu: 'h-full',
		listParent: 'flex h-full justify-evenly items-center',
		listItem: 'text-white w-[33%] text-center py-3',
		listLog: 'w-[33%] text-center py-3',
		listProfile:
			'w-[50%] h-full text-center py-3 flex flex-row justify-center items-start',
		loading: 'text-white flow-root my-auto',
	};
	const { isAuthenticated } = useAuth0();

	const loading = <div className={classes.loading}>No User Available</div>;

	return (
		<header className={classes.header}>
			<nav className={classes.menu}>
				<ul className={classes.listParent}>
					<li className={classes.listItem}>MinExpense</li>
					<li className={classes.listProfile}>
						{isAuthenticated ? <Profile /> : loading}
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
