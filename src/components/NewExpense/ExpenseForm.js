import NewExpense from './NewExpense';

const ExpenseForm = () => {
	const classes = {
		form: 'bg-red-600 p-5 m-1 flex rounded-full shadow-md',
		smScreenParent:
			'w-[30vw] min-w-[150px] flex flex-col justify-center sm:flex-row',
		controlParent: 'm-auto p-3',
		label: 'text-white flow-root text-center',
		input: 'w-full rounded-lg',
		amtInput: 'w-[70px] rounded-lg m-auto flow-root',
		submit: 'bg-red-50 p-3 rounded-full hover:bg-red-100 m-auto flow-root',
	};

	const addExpenseHandler = () => {};

	return (
		<form className={classes.form}>
			<div className={classes.smScreenParent}>
				<div className={classes.controlParent}>
					<label className={classes.label}>Title</label>
					<input
						className={classes.input}
						type='text'
						name='expense-title'
					/>
				</div>
				<div className={classes.controlParent}>
					<label className={classes.label}>Amount</label>
					<input
						className={classes.amtInput}
						type='number'
						min='0.1'
						step='0.1'
						name='expense-amount'
					/>
				</div>
			</div>
			<div className={classes.smScreenParent}>
				<div className={classes.controlParent}>
					<label className={classes.label}>Date</label>
					<input
						className={classes.input}
						type='date'
						min='2019-01-01'
						max='2022-6-1'
						name='expense-date'
					/>
				</div>
				<div className={classes.controlParent}>
					<button
						className={classes.submit}
						type='submit'
						onClick={addExpenseHandler}
					>
						Add
					</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
