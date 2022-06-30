import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Chart from '../Chart/Chart'
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
    //* useState
    const [filteredYear, setFilteredYear] = useState('2020');

    //* Functions
    // Get expenses and filter by year
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    // Set filteredYera state.
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    //* Return
    return (
        <div>
            <h1>Let's get started!</h1>
            <Card className="expenses">
                <Chart />
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;