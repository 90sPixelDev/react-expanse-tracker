const ExpenseDate = (props) => {
	const month = props.date.toLocaleString('en-US', { month: 'short' });
	const day = props.date.toLocaleString('en-US', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<div className='flex flex-col justify-center text-black my-auto w-[80px] h-[80px] bg-red-400 mr-3 rounded-xl border-2 border-red-700'>
			<p className='text-base font-bold text-center'>{month}</p>
			<p className='text-base text-center'>{day}</p>
			<p className='text-base text-center'>{year}</p>
		</div>
	);
};

export default ExpenseDate;
