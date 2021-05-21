import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

class ExpenseList extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { expenses: [] };
	// }
	render() {
		const expenseItem = this.props.expenses.map((expense) => {
			return <ExpenseItem expense={expense.expense} amount={expense.amount} />;
		});
		return <div className="ExpenseList">{expenseItem}</div>;
	}
}

export default ExpenseList;
