import React from 'react';
import UseAnimations from 'react-useanimations';
import loading2 from 'react-useanimations/lib/loading2';
import PropTypes from 'prop-types';

const Loading = (props) => {
	return (
		<UseAnimations
			animation={loading2}
			size={props.size}
			fillColor={props.color}
			style={{ padding: 100 }}
		/>
	);
};

Loading.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number,
};

export default Loading;
