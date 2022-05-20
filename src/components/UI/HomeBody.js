import React from 'react';
import PropTypes from 'prop-types';

const HomeBody = (props) => {
	const classes = {
		homeBody:
			'absolute min-h-full h-fit w-full bg-red-50 grid grid-rows-layout place-items-center bg-gradient-to-t from-red-300 to-red-50',
	};
	return <section className={classes.homeBody}>{props.children}</section>;
};

HomeBody.propTypes = {
	children: PropTypes.node,
};

export default HomeBody;
