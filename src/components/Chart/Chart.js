import React from 'react';
import ChartBar from './ChartBar';
import PropTypes from 'prop-types';

const Chart = (props) => {
	const classes = {
		chart: 'w-full h-[120px] bg-red-200 flex flex-row gap-1 overflow-x-auto justify-between items-end rounded-lg',
	};

	const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);

	const totalAmt = Math.max(...valueArray);

	return (
		<section className={classes.chart}>
			{props.dataPoints.map((datapoint) => (
				<ChartBar
					key={datapoint.label}
					value={datapoint.value}
					maxValue={totalAmt}
					label={datapoint.label}
				/>
			))}
		</section>
	);
};

Chart.propTypes = {
	dataPoints: PropTypes.array,
};

export default Chart;
