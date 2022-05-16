import React from 'react';
import PropTypes from 'prop-types';

const HomeBody = (props) => {
	const classes = {
		homeBody: 'h-full bg-red-50 grid place-items-center',
	};
	return <section className={classes.homeBody}>{props.children}</section>;
};

HomeBody.propTypes = {
	children: PropTypes.node,
};

export default HomeBody;
