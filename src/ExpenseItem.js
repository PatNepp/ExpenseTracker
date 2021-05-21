import React, { Component } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

class ExpenseItem extends Component {
	render() {
		return (
			<div className="ExpenseItem">
				<ExpenseDate />
				<div className="ExpenseItem-description">
					<h2>{this.props.expense}</h2>
					<div className="ExpenseItem-amount">${this.props.amount}</div>
				</div>
			</div>
		);
	}
}

export default ExpenseItem;
