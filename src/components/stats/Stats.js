import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ExpensesChart from '../Chart/ExpensesChart';
import { addYearsOptions, randomKeyGenerator } from '../../utils/utils';

const Stats = (props) => {
	const classes = {
		wholeSection:
			'bg-gray-100 border-2 border-gray-200 w-[80vw] min-w-[200px] min-h-[150px] max-w-[620px] flex flex-col sm:flex-row gap-2 p-3 rounded-lg overflow-y-auto',
		subSection: 'min-w-[200px] sm:mr-2',
		miniRow: 'h-[35px] min-h-[15px] flex justify-between items-baseline',
		statTitle: 'flow-root my-auto',
		select: 'my-auto w-[65px] p-1 rounded-md bg-white border-2 border-gray-300',
		amt: 'my-auto',
	};

	let sum = 0;
	const [total, setTotal] = useState(0);

	const [selectedStatFilter, setSelectedStatFilter] = useState({
		month: 'All',
		year: 'All',
	});

	const addAll = () => {
		props.data.forEach((expense) => {
			sum += parseFloat(expense.amt);
			setTotal(sum.toFixed(2));
		});
	};

	const yearSpendFilterHandler = (e) => {
		setTotal(0);
		setSelectedStatFilter((prevState) => ({
			month: prevState.month,
			year: e.target.value,
		}));
		updateStatsYear(e);
	};

	const updateStatsYear = (e) => {
		if (e.target.value === 'All' && selectedStatFilter.month === 'All') {
			console.log('All years all months!');
			addAll();
		} else if (
			e.target.value !== 'All' &&
			selectedStatFilter.month === 'All'
		) {
			console.log('One year all months!');
			props.data.forEach((expense) => {
				if (
					expense.date.toDate().getFullYear() ===
					parseInt(e.target.value)
				) {
					sum += parseFloat(expense.amt);
					setTotal(sum.toFixed(2));
				}
			});
		} else if (e.target.value === 'All' && selectedStatFilter.month) {
			props.data.forEach((expense) => {
				console.log('All years one month!');
				if (
					expense.date.toDate().toLocaleString('en-US', {
						month: 'short',
					}) === selectedStatFilter.month
				) {
					sum += parseFloat(expense.amt);
					setTotal(sum.toFixed(2));
				}
			});
		} else if (e.target.value != 'All') {
			console.log('One year one month!');
			props.data.forEach((expense) => {
				if (
					expense.date.toDate().toLocaleString('en-US', {
						month: 'short',
					}) === selectedStatFilter.month &&
					expense.date.toDate().getFullYear() ===
						parseInt(e.target.value)
				) {
					sum += parseFloat(expense.amt);
					setTotal(sum.toFixed(2));
				}
			});
		}
	};

	const monthSpendFilterHandler = (e) => {
		setTotal(0);
		setSelectedStatFilter((prevState) => ({
			month: e.target.value,
			year: prevState.year,
		}));
		updateStatsMonth(e);
	};

	const updateStatsMonth = (e) => {
		if (e.target.value === 'All' && selectedStatFilter.year === 'All') {
			console.log('All months all years!');
			addAll();
		} else if (
			e.target.value !== 'All' &&
			selectedStatFilter.year !== 'All'
		) {
			console.log('One month one year!');
			props.data.forEach((expense) => {
				if (
					expense.date.toDate().toLocaleString('en-US', {
						month: 'short',
					}) === e.target.value &&
					expense.date.toDate().getFullYear() ===
						parseInt(selectedStatFilter.year)
				) {
					sum += parseFloat(expense.amt);
					setTotal(sum.toFixed(2));
				}
			});
		} else if (
			e.target.value !== 'All' &&
			selectedStatFilter.year === 'All'
		) {
			console.log('One month all years!');
			props.data.forEach((expense) => {
				if (
					expense.date.toDate().toLocaleString('en-US', {
						month: 'short',
					}) === e.target.value
				) {
					sum += parseFloat(expense.amt);
					setTotal(sum.toFixed(2));
				}
			});
		} else if (
			selectedStatFilter.year != 'All' &&
			e.target.value === 'All'
		) {
			console.log('All months one year!');
			props.data.forEach((expense) => {
				if (
					expense.date.toDate().getFullYear() ===
					parseInt(selectedStatFilter.year)
				) {
					sum += parseFloat(expense.amt);
					setTotal(sum.toFixed(2));
				}
			});
		}
	};

	const filteredExpenses = props.data.filter((expense) => {
		if (selectedStatFilter.year === 'All') return expense;
		else
			return (
				expense.date.toDate().getFullYear().toString() ===
				selectedStatFilter.year
			);
	});

	useEffect(() => {
		addAll();
	}, []);

	return (
		<section className={classes.wholeSection}>
			<div className={classes.subSection}>
				<div className={classes.miniRow}>
					<label className={classes.statTitle}>Year:</label>
					<select
						className={classes.select}
						onChange={yearSpendFilterHandler}
						value={selectedStatFilter.year}
					>
						<option>All</option>
						{addYearsOptions().map((year) => (
							<option key={randomKeyGenerator(year)}>
								{year}
							</option>
						))}
					</select>
				</div>
				<div className={classes.miniRow}>
					<label className={classes.statTitle}>Month:</label>
					<select
						className={classes.select}
						onChange={monthSpendFilterHandler}
						value={selectedStatFilter.month}
					>
						<option>All</option>
						<option>Jan</option>
						<option>Feb</option>
						<option>Mar</option>
						<option>Apr</option>
						<option>May</option>
						<option>Jun</option>
						<option>Jul</option>
						<option>Aug</option>
						<option>Sep</option>
						<option>Oct</option>
						<option>Nov</option>
						<option>Dec</option>
					</select>
				</div>
				<div className={classes.miniRow}>
					<p className={classes.statTitle}>Total Spent: </p>
					<span className={classes.amt}>${total}</span>
				</div>
			</div>
			<ExpensesChart expenses={filteredExpenses} />
		</section>
	);
};

Stats.propTypes = {
	data: PropTypes.array,
};

export default Stats;
