import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	const classes = {
		expenseParent:
			'group bg-red-50 hover:bg-red-100 hover:scale-105 transition-all ease-in-out p-5 rounded-full shadow-lg font-OpenSans m-3',
		spacing: 'ml-5 flex items-center justify-between gap-5',
		flexLayout: 'inline-flex w-100',
		expenseTitle: 'text-gray-700 group-hover:text-black font-bold text-2xl 				m-auto p-3',
		expenseAmt:
			'bg-red-300 w-[150px] text-center p-3 rounded-3xl border-2 border-red-600 mr-3',
		expenseAmtText: 'text-3xl',
	};

	return (
		<div className={classes.expenseParent}>
			<div className={classes.spacing}>
				<div className={classes.flexLayout}>
					<ExpenseDate date={props.date} />
					<h2 className={classes.expenseTitle}>{props.title}</h2>
				</div>
				<div className={classes.expenseAmt}>
					<p className={classes.expenseAmtText}>${props.amount}</p>
				</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
