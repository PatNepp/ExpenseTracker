import React, { Component } from 'react';
import AddExpenseButton from './AddExpenseButton';
import AddExpenseForm from './AddExpenseForm';
import ExpenseItem from './ExpenseItem';
import ExpenseList from './ExpenseList';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = { expenses: [], formVisible: false };
	}
	addExpense = (expense) => {
		let newExpense = { ...expense };
		this.setState((st) => ({
			expenses: [ ...st.expenses, newExpense ]
		}));
	};
	formVisible = () => {
		this.setState({
			formVisible: !this.state.formVisible
		})
	}
	render() {
		return (
			<div>
				{!this.state.formVisible ? <AddExpenseButton formVisible={this.formVisible} /> :
				<AddExpenseForm addExpense={this.addExpense} formVisible={this.formVisible} />}
				<ExpenseList expenses={this.state.expenses} />
			</div>
		);
	}
}

export default Container;
