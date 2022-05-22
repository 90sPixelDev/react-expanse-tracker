import React from 'react';
import PropTypes from 'prop-types';

const HomeBody = (props) => {
	const classes = {
		homeBody:
			'absolute h-fit w-full grid grid-rows-layout sm:grid-rows-smLayout gap-5 place-items-center',
	};
	return <section className={classes.homeBody}>{props.children}</section>;
};

HomeBody.propTypes = {
	children: PropTypes.node,
};

export default HomeBody;
