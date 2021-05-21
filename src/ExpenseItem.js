import React, { Component } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

class ExpenseItem extends Component {
	// static defaultProps = {
	// 	expenses: [
	// 		{
	// 			title: 'New Car',
	// 			amount: 35000
	// 		},
	// 		{
	// 			title: 'Beer',
	// 			amount: 18
	// 		},
	// 		{
	// 			title: '10in dildo',
	// 			amount: 5000
	// 		},
	// 		{
	// 			title: 'Groceries',
	// 			amount: 45
	// 		}
	// 	]
	// };
	render() {
		return (
			<div className="ExpenseItem">
				<ExpenseDate />
				<div className="ExpenseItem-description">
					<h2>{this.props.title}</h2>
					<div className="ExpenseItem-amount">${this.props.amount}</div>
				</div>
			</div>
		);
	}
}

export default ExpenseItem;
