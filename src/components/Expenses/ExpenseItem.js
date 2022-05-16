import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	return (
		<div className='group bg-red-50 hover:bg-red-100 hover:scale-105 transition-all ease-in-out p-5 rounded-full shadow-lg font-OpenSans m-3'>
			<div className='ml-5 flex items-center justify-between gap-5'>
				<div className='inline-flex w-100'>
					<ExpenseDate date={props.date} />
					<h2 className='text-gray-700 group-hover:text-black font-bold text-2xl m-auto p-3'>
						{props.title}
					</h2>
				</div>
				<div className='bg-red-300 w-[150px] text-center p-3 rounded-3xl border-2 border-red-600 mr-3'>
					<p className='text-3xl'>${props.amount}</p>
				</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
