import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import autoAnimate from '@formkit/auto-animate';

const ChartBar = (props) => {
	let barFillHeight = '0%';
	if (props.maxValue > 0) {
		barFillHeight =
			Math.round((props.value / props.maxValue) * 100) + '%';
	}

	const barHeight = 'h-[' + barFillHeight + ']';

	const animParent = useRef(null);
	useEffect(() => {
		animParent.current && autoAnimate(animParent.current);
	}, [animParent]);

	const classes = {
		parent: 'h-fit',
		container: 'h-full',
		barBorder:
			'flex flex-col justify-end border-2 border-red-600 rounded-full h-[90px] w-[1em] mx-auto bg-red-400',
		bar: 'bg-red-900 w-[.75em]',
		title: '',
	};

	const setBarHeight = {
		height: barFillHeight,
	};

	return (
		<div className={classes.parent}>
			<div className={classes.container}>
				<div className={classes.barBorder} ref={animParent}>
					<div
						className={classes.bar}
						style={setBarHeight}
					></div>
				</div>
				<p className={classes.title}>{props.label}</p>
			</div>
		</div>
	);
};

ChartBar.propTypes = {
	label: PropTypes.string,
	maxValue: PropTypes.number,
	value: PropTypes.number,
};

export default ChartBar;
