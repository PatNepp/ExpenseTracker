import React, { Component } from 'react';

class AddExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = { title: ``, amount: `` };
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	render() {
		return (
			<form>
				<label htmlFor="expense">Expense:</label>
				<input id="expense" name="expense" value={this.state.title} onChange={this.handleChange} />
				<label htmlFor="amount">Amount:</label>
				<input id="amount" name="amount" value={this.state.amount} onChange={this.handleChange} />
				<button>Add</button>
			</form>
		);
	}
}

export default AddExpenseForm;
