import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
	const classes = {
		parent: '',
	};

	return (
		<div className={classes.parent}>
			<ExpenseForm></ExpenseForm>
		</div>
	);
};

export default NewExpense;
