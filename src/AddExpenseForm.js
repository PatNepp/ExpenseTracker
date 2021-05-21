import React, { Component } from 'react';

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
		this.setState({ expense: '', amount: '' });
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="expense">Expense: </label>
				<input id="expense" name="expense" value={this.state.expense} onChange={this.handleChange} />
				<label htmlFor="amount">Amount: $</label>
				<input id="amount" name="amount" value={this.state.amount} onChange={this.handleChange} />
				<button>Add</button>
			</form>
		);
	}
}

export default AddExpenseForm;
