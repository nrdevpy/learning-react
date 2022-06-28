import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');
    let expensesContent = <p>No expenses found.</p>


    // Functions
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    // Return
    return (
        <div>
            <h1>Let's get started!</h1>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card>
        </div>
    )
}

export default Expenses;