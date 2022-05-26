import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpensesFilter = (props) => {
	const classes = {
		control: 'mx-5 mt-3 flex justify-between items-baseline',
		select: 'rounded-md p-1 w-15',
		label: 'mr-3 text-white',
	};

	const onFilterSelectedHandler = (e) => {
		props.onFilterChanged(e.target.value);
	};

	return (
		<div className={classes.control}>
			<label className={classes.label}>Filter by Year:</label>
			<select
				className={classes.select}
				onChange={onFilterSelectedHandler}
				value={props.year}
			>
				<option value='All'>All</option>
				<option value='2022'>2022</option>
				<option value='2021'>2021</option>
				<option value='2020'>2020</option>
				<option value='2019'>2019</option>
			</select>
		</div>
	);
};

ExpensesFilter.propTypes = {
	year: PropTypes.string,
	onFilterChanged: PropTypes.func,
};

export default ExpensesFilter;
