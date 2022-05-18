import React, { useEffect, useState } from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
	const classes = {
		card: 'm-5 p-5 bg-red-600 w-[90vw] sm:w-[620px] flex flex-col gap-4',
	};

	const [filterYear, setFilterYear] = useState(2022);

	const filterHandler = (yearSelected) => {
		console.log('Year xfer: ' + yearSelected);
		setFilterYear(yearSelected);
	};

	return (
		<div>
			<Card className={classes.card}>
				<ExpenseFilter
					onFilterChanged={filterHandler}
					year={filterYear}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amt}
						date={expense.date}
					></ExpenseItem>
				))}
			</Card>
		</div>
	);
};

Expenses.propTypes = {
	items: PropTypes.array,
};

export default Expenses;
