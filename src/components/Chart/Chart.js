import React from 'react';
import ChartBar from './ChartBar';
import PropTypes from 'prop-types';

const Chart = (props) => {
	const classes = {
		chart: 'w-full h-full bg-blue-500',
	};

	// const hold = props.dataPoints.map((dataPoint) => <ChartBar />);

	return <section className={classes.chart}></section>;
};

// Chart.propTypes = {
// 	dataPoints: PropTypes.array,
// };

export default Chart;
