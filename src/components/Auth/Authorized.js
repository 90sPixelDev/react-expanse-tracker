import React, { useState, useEffect } from 'react';
import Expenses from '../Expenses/Expenses';
import NewExpense from '../NewExpense/NewExpense';
import PropTypes from 'prop-types';
import Stats from '../stats/Stats';
import { db } from '../../firebase.config';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Loading from '../animations/Loading';

const Authorized = (props) => {
	const [expenses, setExpenses] = useState([{}]);
	const userCollectionRef = collection(db, props.value.uid);
	const [update, setUpdate] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const refreshExpenses = () => {
		setUpdate((prevState) => !prevState);
	};

	const getExpenses = async () => {
		const data = await getDocs(userCollectionRef);
		!data
			? console.log('No Data Found.')
			: setExpenses(
					data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			  );
		setTimeout(() => setIsLoading(false), 1000);
	};

	const deleteExpense = async (expID) => {
		console.log(expID);
		await deleteDoc(doc(userCollectionRef, expID));
		refreshExpenses();
	};

	useEffect(() => {
		getExpenses();
	}, [, update]);

	return (
		<>
			<NewExpense onAddExpense={refreshExpenses} user={props.value} />
			{isLoading && <Loading color={'gray'} size={56} />}
			{!isLoading && <Stats data={expenses}></Stats>}
			{!isLoading && (
				<Expenses
					items={expenses}
					onDeleteExpense={deleteExpense}
				/>
			)}
		</>
	);
};

Authorized.propTypes = {
	expenses: PropTypes.object,
	onUpdateData: PropTypes.func,
	value: PropTypes.object,
};

export default Authorized;
