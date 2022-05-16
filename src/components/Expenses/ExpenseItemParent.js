import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const ExpenseItemParent = (props) => {
	const expenses = [
		{
			title: 'Car Insurance',
			date: new Date(2021, 8, 24),
			amt: 302.95,
		},
		{
			title: 'Mortgage',
			date: new Date(2021, 5, 8),
			amt: 980.45,
		},
		{
			title: 'Cat Food',
			date: new Date(2021, 10, 16),
			amt: 45.33,
		},
		{
			title: 'Cat Litter',
			date: new Date(2021, 7, 4),
			amt: 21.74,
		},
		{
			title: 'Walmart',
			date: new Date(2021, 2, 15),
			amt: 289.56,
		},
	];

	const classes = {
		card: 'm-5 p-5 bg-red-600 w-[90vw] sm:w-[620px] flex flex-col gap-4',
	};

	return (
		<Card className={classes.card}>
			<ExpenseItem
				title={expenses[0].title}
				amount={expenses[0].amt}
				date={expenses[0].date}
			/>
			<ExpenseItem
				title={expenses[1].title}
				amount={expenses[1].amt}
				date={expenses[1].date}
			/>
			<ExpenseItem
				title={expenses[2].title}
				amount={expenses[2].amt}
				date={expenses[2].date}
			/>
			<ExpenseItem
				title={expenses[3].title}
				amount={expenses[3].amt}
				date={expenses[3].date}
			/>
			<ExpenseItem
				title={expenses[4].title}
				amount={expenses[4].amt}
				date={expenses[4].date}
			/>
		</Card>
	);
};

export default ExpenseItemParent;
