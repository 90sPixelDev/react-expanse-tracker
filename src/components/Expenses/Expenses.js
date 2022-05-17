import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
	const classes = {
		card: 'm-5 p-5 bg-red-600 w-[90vw] sm:w-[620px] flex flex-col gap-4',
	};

	// const expenseItems = [];
	// for (let i = 0; i < props.items.length; i++) {
	// 	expenseItems.push(
	// 		<ExpenseItem
	// 			key={props.items[i].id}
	// 			title={props.items[i].title}
	// 			amount={props.items[i].amt}
	// 			date={props.items[i].date}
	// 		/>
	// 	);
	// }

	return (
		<div>
			<ExpenseFilter />
			<Card className={classes.card}>
				<ExpenseItem
					key={props.items[0].id}
					title={props.items[0].title}
					amount={props.items[0].amt}
					date={props.items[0].date}
				/>
				<ExpenseItem
					key={props.items[1].id}
					title={props.items[1].title}
					amount={props.items[1].amt}
					date={props.items[1].date}
				/>
				<ExpenseItem
					key={props.items[2].id}
					title={props.items[2].title}
					amount={props.items[2].amt}
					date={props.items[2].date}
				/>
				<ExpenseItem
					key={props.items[3].id}
					title={props.items[3].title}
					amount={props.items[3].amt}
					date={props.items[3].date}
				/>
				<ExpenseItem
					key={props.items[4].id}
					title={props.items[4].title}
					amount={props.items[4].amt}
					date={props.items[4].date}
				/>
			</Card>
		</div>
	);
};

Expenses.propTypes = {
	items: PropTypes.array,
};

export default Expenses;
