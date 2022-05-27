import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = (props) => {
	const classes = {
		Wrapper: 'absolute w-full grid grid-rows-layout sm:grid-rows-smLayout gap-5 place-items-center',
	};
	return <section className={classes.Wrapper}>{props.children}</section>;
};

Wrapper.propTypes = {
	children: PropTypes.node,
};

export default Wrapper;
