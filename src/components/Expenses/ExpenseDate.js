const ExpenseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'short' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

	const classes = {
		parent: 'flex flex-col justify-center text-black my-auto w-[80px] h-[80px] bg-red-400 mr-3 rounded-xl border-2 border-red-700',
		month: 'text-base font-bold text-center',
		day: 'text-base text-center',
		year: 'text-base text-center',
	};

	return (
		<div className={classes.parent}>
			<p className={classes.month}>{month}</p>
			<p className={classes.day}>{day}</p>
			<p className={classes.year}>{year}</p>
		</div>
	);
};

export default ExpenseDate;
