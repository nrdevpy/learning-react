import React from "react";

import Card from '../UI/Card'
import Button from "./Button";
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    console.log(props)
    return (
        <React.Fragment>
            <div className={classes.backdrop} onClick={props.onCloseError}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onCloseError}>Close</Button>
                </footer>
            </Card>
        </React.Fragment>
    );
};
export default ErrorModal;