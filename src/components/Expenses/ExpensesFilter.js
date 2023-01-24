import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addYearsOptions, randomKeyGenerator } from '../../utils/utils';

const ExpensesFilter = (props) => {
	const classes = {
		control: 'mx-5 mt-3 flex justify-between items-baseline',
		select: 'rounded-md p-1 w-15 border-2 border-gray-300',
		label: 'mr-3',
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
				{addYearsOptions().map((year) => (
					<option key={randomKeyGenerator(year)}>{year}</option>
				))}
			</select>
		</div>
	);
};

ExpensesFilter.propTypes = {
	year: PropTypes.string,
	onFilterChanged: PropTypes.func,
};

export default ExpensesFilter;
