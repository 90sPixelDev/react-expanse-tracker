import React, { useState, useEffect } from 'react';
import Profile from '../User/Profile';
import Loading from '../animations/Loading';
import PropTypes from 'prop-types';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.config';
import LogoutBtn from '../Auth/LogoutBtn';

const Header = (props) => {
	const classes = {
		header: 'absolute top-0 w-full h-[60px] bg-gray-500 z-10 border-b-2 border-gray-300',
		menu: 'h-full',
		listParent: 'flex h-full justify-evenly items-center',
		listItem: 'text-white w-[33%] text-center py-3',
		listLog: 'w-[33%] text-center py-3',
		listProfile:
			'w-[50%] h-full text-center flex flex-row justify-center items-center bg-gray-100',
		loading: 'text-white flow-root my-auto',
	};

	const loading = <Loading color={'black'} size={25} />;
	const [userInfo, setUserInfo] = useState(loading);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserInfo(user.email);
			} else {
				setUserInfo('No User Signed In');
			}
		});
	});

	return (
		<header className={classes.header}>
			<nav className={classes.menu}>
				<ul className={classes.listParent}>
					<li className={classes.listItem}>MinExpense</li>
					<li className={classes.listProfile}>{userInfo}</li>
					<li className={classes.listLog}>
						<LogoutBtn />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
