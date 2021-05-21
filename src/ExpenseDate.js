import React, { Component } from 'react';
import './ExpenseDate.css';

class ExpenseDate extends Component {
	render() {
		const date = new Date();
		const month = date.toLocaleString('en-US', { month: 'long' });
		const day = date.toLocaleString('en-US', { day: '2-digit' });
		const year = date.getFullYear();
		return (
			<div className="ExpenseDate">
				<div className="ExpenseDate-month">
					{month} {day}
				</div>
				{year}
			</div>
		);
	}
}

export default ExpenseDate;
