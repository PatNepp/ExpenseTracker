import React, { Component } from 'react';
import AddExpenseForm from './AddExpenseForm';
import ExpenseList from './ExpenseList';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = { expenses: [] };
	}
	addExpense = (expense) => {
		let newExpense = { ...expense };
		this.setState((st) => ({
			expenses: [ ...st.expenses, newExpense ]
		}));
	};
	render() {
		return (
			<div>
				<AddExpenseForm addExpense={this.addExpense} />
				<ExpenseList expenses={this.state.expenses} />
			</div>
		);
	}
}

export default Container;
