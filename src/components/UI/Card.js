import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
	const classes = 'rounded-3xl ' + props.className;

	return <div className={classes}>{props.children}</div>;
};

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Card;
