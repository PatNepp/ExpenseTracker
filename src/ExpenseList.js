import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

class ExpenseList extends Component {
	constructor(props) {
		super(props);
		this.state = { expenses: [ { title: `Happy`, amount: 0 } ] };
	}
	render() {
		const expenseItem = this.state.expenses.map((expense) => {
			return <ExpenseItem title={expense.title} amount={expense.amount} />;
		});
		return <div>{expenseItem}</div>;
	}
}

export default ExpenseList;
