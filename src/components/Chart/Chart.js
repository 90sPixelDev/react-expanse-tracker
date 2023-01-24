import React from 'react';
import ChartBar from './ChartBar';
import PropTypes from 'prop-types';

const Chart = (props) => {
	const classes = {
		chart: 'w-full min-h-[120px] h-[120px] bg-white flex flex-row gap-1 overflow-x-auto justify-between items-end rounded-lg border-2 border-gray-300',
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
