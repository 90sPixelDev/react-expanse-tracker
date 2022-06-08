import React, { useState, useEffect } from 'react';
import Expenses from '../Expenses/Expenses';
import NewExpense from '../NewExpense/NewExpense';
import PropTypes from 'prop-types';
import Stats from '../stats/Stats';

const LoggedIn = (props) => {
	const addExpenseHandler = (createdExpense) => {
		props.onUpdateData(createdExpense);
	};

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Stats data={props.expenses}></Stats>
			<Expenses items={props.expenses} />
		</>
	);
};

LoggedIn.propTypes = {
	expenses: PropTypes.array,
	onUpdateData: PropTypes.func,
};

export default LoggedIn;
