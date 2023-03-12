import Expenseitem from "./Expenseitem"
import "./ExpensesList.css";
const ExpensesList = (props) => {
    if(props.item.length === 0) {
        return <h2 className="expenses-list__fallback">No Items To Show</h2>
    }
  return (
    <ul className="expenses-list">
        {props.item.map((tasks) => <Expenseitem 
        key={tasks.id}
        title = {tasks.title} 
        amount= {tasks.amount} 
        date={tasks.date}
        />
        )}
    </ul>
  )
}

export default ExpensesList