import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
	const classes = {
		wholeSection: 'bg-red-100 w-[25vw] grid p-3',
		miniRow: 'h-[3vh] min-h-[15px] flex justify-between',
		statTitle: 'flow-root my-auto font-bold',
		select: 'my-auto h-[1.5em]',
		amt: 'my-auto',
	};

	let sum = 0;
	const [total, setTotal] = useState(0);
	// let selectedYear = 'All';
	// let selectedMonth = 'All';
	const [selectedStatFilter, setSelectedStatFilter] = useState({
		month: 'All',
		year: 'All',
	});

	const yearSpendFilterHandler = (e) => {
		setTotal(0);
		setSelectedStatFilter((prevState) => ({
			month: prevState.month,
			year: e.target.value,
		}));
		if (e.target.value === 'All' && selectedStatFilter.month === 'All') {
			console.log('All years all months!');
			props.data.forEach((expense) => {
				sum += expense.amt;
				setTotal(sum.toFixed(2));
			});
		} else if (
			e.target.value !== 'All' &&
			selectedStatFilter.month === 'All'
		) {
			console.log('One year all months!');
			props.data.forEach((expense) => {
				if (
					expense.date.getFullYear() === parseInt(e.target.value)
				) {
					sum += expense.amt;
					setTotal(sum.toFixed(2));
				}
			});
		} else if (e.target.value != 'All') {
			console.log('One year one month!');
			props.data.forEach((expense) => {
				if (
					expense.date.toLocaleString('en-US', {
						month: 'short',
					}) === selectedStatFilter.month &&
					expense.date.getFullYear() === parseInt(e.target.value)
				) {
					sum += expense.amt;
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
		updateStats(e);
	};

	const updateStats = (e) => {
		if (e.target.value === 'All' && selectedStatFilter.year === 'All') {
			console.log('All months all years!');
			props.data.forEach((expense) => {
				sum += expense.amt;
				setTotal(sum.toFixed(2));
			});
		} else if (
			e.target.value !== 'All' &&
			selectedStatFilter.year === 'All'
		) {
			console.log('One month all years!');
			props.data.forEach((expense) => {
				if (
					expense.date.toLocaleString('en-US', {
						month: 'short',
					}) === e.target.value
				) {
					sum += expense.amt;
					setTotal(sum.toFixed(2));
				}
			});
		} else if (selectedStatFilter.year != 'All') {
			console.log('One month one year!');
			props.data.forEach((expense) => {
				if (
					expense.date.toLocaleString('en-US', {
						month: 'short',
					}) === e.target.value &&
					expense.date.getFullYear() ===
						parseInt(selectedStatFilter.year)
				) {
					sum += expense.amt;
					setTotal(sum.toFixed(2));
				}
			});
		}
	};

	// useEffect(selectedStatFilter);

	return (
		<section className={classes.wholeSection}>
			<div className={classes.miniRow}>
				<label className={classes.statTitle}>Year:</label>
				<select
					className={classes.select}
					onChange={yearSpendFilterHandler}
					value={selectedStatFilter.year}
				>
					<option>All</option>
					<option>2022</option>
					<option>2021</option>
					<option>2020</option>
					<option>2019</option>
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
				<span className={classes.amt}>{total}</span>
			</div>
		</section>
	);
};

Stats.propTypes = {
	data: PropTypes.array,
};

export default Stats;
