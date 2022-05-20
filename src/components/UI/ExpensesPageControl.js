import React from 'react';

const ExpensesPageControl = () => {
	const classes = {
		control: 'mx-5 flex justify-between items-center',
		select: 'rounded-md',
		page: 'text-white mb-1',
		button: 'mb-1 bg-white w-[3em] py-1 rounded-lg',
	};

	return (
		<div className={classes.control}>
			<button className={classes.button}>Prev</button>
			<p className={classes.page}>Page: 1</p>
			<button className={classes.button}>Next</button>
		</div>
	);
};

export default ExpensesPageControl;
