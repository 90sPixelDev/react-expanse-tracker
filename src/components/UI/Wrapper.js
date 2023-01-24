import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = (props) => {
	const classes = {
		Wrapper: 'w-full h-full pt-4 pb-40 overflow-y-scroll flex flex-col gap-5 place-items-center',
		// Wrapper: 'absolute top-20 w-full h-full grid grid-rows-layout sm:grid-rows-smLayout gap-5 place-items-center',
	};
	return <section className={classes.Wrapper}>{props.children}</section>;
};

Wrapper.propTypes = {
	children: PropTypes.node,
};

export default Wrapper;
