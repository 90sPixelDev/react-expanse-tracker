import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpensesFilter = (props) => {
	const classes = {
		control: 'mr-3 flex justify-end',
		label: 'mr-3 text-white',
	};

	const onFilterSelectedHandler = (e) => {
		console.log('Year slelected: ' + e.target.value);
		props.onFilterChanged(e.target.value);
	};

	return (
		<div className={classes.control}>
			<label className={classes.label}>Filter by Year:</label>
			<select
				onChange={onFilterSelectedHandler}
				value={props.selected}
			>
				<option value='2022'>2022</option>
				<option value='2021'>2021</option>
				<option value='2020'>2020</option>
				<option value='2019'>2019</option>
			</select>
		</div>
	);
};

ExpensesFilter.propTypes = {
	selected: PropTypes.number,
	onFilterChanged: PropTypes.func,
};

export default ExpensesFilter;
