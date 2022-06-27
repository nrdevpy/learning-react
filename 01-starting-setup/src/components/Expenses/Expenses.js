import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div>
            <h1>Let's get started!</h1>
            <Card className="expenses">
                {props.items.map(item => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))}
            </Card>
        </div>
    )
}

export default Expenses;