import React from 'react';

const ExpensesBottom = () => {
	const classes = {
		control: 'mx-5 flex justify-between items-center h-8',
		text: 'mb-1 text-center m-auto text-lg',
	};

	return (
		<div className={classes.control}>
			<p className={classes.text}>Expenses</p>
		</div>
	);
};

export default ExpensesBottom;
