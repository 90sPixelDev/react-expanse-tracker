import React from 'react';

const Header = () => {
	const classes = {
		header: 'w-full h-full bg-gray-900',
		menu: 'h-full',
		listParent: 'flex h-full justify-evenly items-center',
		listItem: 'text-white w-[33%] text-center py-3',
	};

	return (
		<header className={classes.header}>
			<nav className={classes.menu}>
				<ul className={classes.listParent}>
					<li className={classes.listItem}>Mini</li>
					<li className={classes.listItem}>Expense</li>
					<li className={classes.listItem}>Tracker</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
