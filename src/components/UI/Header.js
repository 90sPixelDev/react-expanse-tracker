import React from 'react';

const Header = () => {
	const classes = {
		header: 'w-full h-full bg-red-900',
		menu: 'h-full',
		listParent: 'flex h-full justify-evenly items-center',
		listItem: 'text-white',
	};

	return (
		<header className={classes.header}>
			<nav className={classes.menu}>
				<ul className={classes.listParent}>
					<li className={classes.listItem}>Home</li>
					<li className={classes.listItem}>Expenses</li>
					<li className={classes.listItem}>About</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
