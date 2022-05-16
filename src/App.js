import './tailwind.output.css';
import ExpenseItemParent from './components/Expenses/ExpenseItemParent';
import HomeBody from './components/UI/HomeBody';

const App = () => {
	return (
		<HomeBody>
			<ExpenseItemParent />
		</HomeBody>
	);
};

export default App;
