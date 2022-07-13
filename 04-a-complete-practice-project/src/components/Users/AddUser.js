import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    // Reset states
    const reset = () => {
        setEnteredUserName('');
        setEnteredUserAge('');
    };

    // On Submit.
    const addUserHandler = event => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge === 0) {
            return;
        } else if (+enteredUserAge < 1) {
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

    return (
        <div>
            <ErrorModal title='An error ocurred!' message='Something went wrong!'/>
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
        </div>
    );
};
export default AddUser;