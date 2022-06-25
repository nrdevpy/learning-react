import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
    return (
        <div>
            <h1>Let's get started!</h1>
            <div className="expenses">
                {props.items.map(item => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    )
}

export default Expenses;