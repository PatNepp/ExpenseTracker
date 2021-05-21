import React, { Component } from 'react';
import "./AddExpenseButton.css"

class AddExpenseButton extends Component {
    handleClick = (e) => {
        e.preventDefault()
        this.props.formVisible()
    }
    render() {
        return (
            <div className="AddExpenseButton">
                <button onClick={this.handleClick}>Add New Expense</button>
            </div>
        );
    }
}

export default AddExpenseButton;