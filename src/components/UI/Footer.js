import React from 'react';

const Footer = () => {
	const classes = {
		footer: 'w-full h-[50px] bg-red-900 flex flex-row',
		text: 'text-white m-auto text-center',
	};

	return (
		<footer className={classes.footer}>
			<p className={classes.text}>
				Created, designed, and developed with ❤️ by Lien Font
			</p>
		</footer>
	);
};

export default Footer;
