import React, { useState } from 'react';
import './ExpenseForm.css';

// ExpenseForm component
const ExpenseForm = props => {
    //* useStates
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
   
    // Another way to add multiple useStates
    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    }); */
    //* Functions
    // Get form's title data and set the state.
    const titleChangeHandler = event => {
        // 1º Way 
        setEnteredTitle(event.target.value);
        /* 2º Way
        setUserInput ({
            ...userInput,
            enteredTitle: event.target.value,
        }); */
        /* 3º Way (To keep save previous variable)
        setUserInput(prevState => {
            return ({
                ...prevState,
                enteredTitle: event.target.value
            });
        }); */
    };
    // Get form's amount data and set the state.
    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);
        /* setUserInput ({
            ...userInput,
            enteredAmount: event.target.value,
        }); */
    };
    // Get form's date data and set the state.
    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);
        /* setUserInput ({
            ...userInput,
            enteredDate: event.target.value,
        }); */
    };
    // Get form's data and send it to NewExpense.js .
    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    //* Return
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={enteredAmount}
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions--flex">
                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancelClick}>Cancel</button>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
};
export default ExpenseForm;