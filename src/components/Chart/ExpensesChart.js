import React from 'react';
import Chart from './Chart';
import PropTypes from 'prop-types';

const ExpensesChart = (props) => {
	const chartDataPoints = [
		{
			label: 'Jan',
			value: 0,
		},
		{
			label: 'Feb',
			value: 0,
		},
		{
			label: 'Mar',
			value: 0,
		},
		{
			label: 'Apr',
			value: 0,
		},
		{
			label: 'May',
			value: 0,
		},
		{
			label: 'Jun',
			value: 0,
		},
		{
			label: 'Jul',
			value: 0,
		},
		{
			label: 'Aug',
			value: 0,
		},
		{
			label: 'Sep',
			value: 0,
		},
		{
			label: 'Oct',
			value: 0,
		},
		{
			label: 'Nov',
			value: 0,
		},
		{
			label: 'Dec',
			value: 0,
		},
	];

	props.expenses.forEach((expense) => {
		const expenseMonth = expense.date.toDate().getMonth();
		chartDataPoints[expenseMonth].value += parseFloat(expense.amt);
	});

	return <Chart dataPoints={chartDataPoints}></Chart>;
};

ExpensesChart.propTypes = {
	dataPoints: PropTypes.array,
	expenses: PropTypes.array,
};

export default ExpensesChart;
