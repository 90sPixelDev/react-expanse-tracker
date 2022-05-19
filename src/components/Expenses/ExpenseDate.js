import React from 'react';
import PropTypes from 'prop-types';

const ExpenseDate = (props) => {
	const classes = {
		parent: 'flex flex-col justify-center text-black my-auto w-[80px] h-[80px] bg-red-400 mr-3 rounded-xl border-2 border-red-700',
		month: 'text-[4vw] xsm:text-base font-bold text-center',
		day: 'text-[4vw] xsm:text-base text-center',
		year: 'text-[4vw] xsm:text-base text-center',
	};

	const month = props.date.toLocaleString('en-US', { month: 'short' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<div className={classes.parent}>
			<p className={classes.month}>{month}</p>
			<p className={classes.day}>{day}</p>
			<p className={classes.year}>{year}</p>
		</div>
	);
};

ExpenseDate.propTypes = {
	date: PropTypes.instanceOf(Date),
};

export default ExpenseDate;
