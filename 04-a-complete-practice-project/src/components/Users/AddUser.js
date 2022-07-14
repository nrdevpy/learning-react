import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState();
    // Reset states
    const reset = () => {
        setEnteredUserName('');
        setEnteredUserAge('');
    };

    // On Submit.
    const addUserHandler = event => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        } else if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredUserName, enteredUserAge);
        reset();
    };

    // Set Name.
    const userNameChangeHandler = event => {
        setEnteredUserName(event.target.value);
    };

    // Set Age.
    const userAgeChangeHandler = event => {
        setEnteredUserAge(event.target.value);
    };

    // Disable error modal
    const errorHandler = () => {
        setError(null);
        reset();
    };
    
    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onCloseError={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        onChange={userNameChangeHandler}
                        value={enteredUserName}
                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        onChange={userAgeChangeHandler}
                        value={enteredUserAge}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};
export default AddUser;