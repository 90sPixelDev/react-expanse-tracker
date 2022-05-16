import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const classes = {
		expenseParent:
			'w-full group bg-red-50 hover:bg-red-100 hover:scale-105 transition-all ease-in-out p-5 rounded-full shadow-lg font-OpenSans m-auto',
		spacing: 'flex items-center justify-between',
		flexLayout: 'inline-flex w-100',
		expenseTitle:
			'text-gray-700 group-hover:text-black font-bold text-[4vw] xsm:text-xl sm:text-2xl m-auto p-3',
		expenseAmt:
			'bg-red-300 w-[150px] text-center p-3 rounded-3xl border-2 border-red-600',
		expenseAmtText: 'text-[4vw] xsm:text-xl',
	};

	const changeTitleHandler = (props) => {
		const arr = [
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z',
		];

		let randomLetters = '';
		for (let i = 0; i < 6; i++) {
			randomLetters += arr[Math.floor(Math.random() * 26)];
			setTitle(randomLetters);
		}
		console.log(randomLetters);
	};

	return (
		<div className={classes.expenseParent}>
			<div className={classes.spacing}>
				<div className={classes.flexLayout}>
					<ExpenseDate date={props.date} />
					<button
						className={classes.expenseTitle}
						onClick={changeTitleHandler}
					>
						{title}
					</button>
				</div>
				<div className={classes.expenseAmt}>
					<p className={classes.expenseAmtText}>
						${props.amount}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
