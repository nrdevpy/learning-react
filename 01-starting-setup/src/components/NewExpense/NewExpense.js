import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// NewExpense component
const NewExpense = props => {
    const [isTab, setIsTab] = useState(false);
    //* Functions
    // Create expense object from ExpenseForm's datas.
    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
        setIsTab(false);
    };
    const switcherForm = () => !isTab ? setIsTab(true) : setIsTab(false);

    //* Return
    return (
        <div className='new-expense'>
            {!isTab && <button type='button' onClick={switcherForm}>Add New Expense</button>}
            {isTab && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancelClick={switcherForm}
                />
            )}
        </div>
    );
};
export default NewExpense;