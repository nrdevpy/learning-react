import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// NewExpense component
const NewExpense = props => {
    //* Functions
    // Create expense object from ExpenseForm's data.
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
    };
    //* Return
    return (
        <div className='new-expense'>
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
            />
        </div>
    );
};
export default NewExpense;