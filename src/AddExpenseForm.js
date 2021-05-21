import React, { Component } from 'react';
import "./AddExpenseForm.css"

class AddExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = { expense: ' ', amount: ' ' };
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addExpense(this.state);
		this.props.formVisible()
		this.setState({ expense: '', amount: 0 });
	};
	render() {
		return (
			<form className="AddExpenseForm" onSubmit={this.handleSubmit}>
				<div className="AddExpenseForm-input">
				<label htmlFor="expense">Expense: </label>
				<input id="expense" name="expense" value={this.state.expense} onChange={this.handleChange} />
				</div>
				<div className="AddExpenseForm-input">
				<label htmlFor="amount">Amount: $</label>
				<input id="amount" name="amount" value={this.state.amount} onChange={this.handleChange} />
				</div>
				<button>Add</button>
			</form>
		);
	}
}

export default AddExpenseForm;
