import  './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from "../UI/card";
import {useState} from "react"
const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = (e) =>{
    e.preventDefault()
    setTitle('my home')
    console.log(title);
    
  }
  return (
    <Card className="expense-item">
          <ExpenseDate date = {props.date} />
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick = {clickHandler} className="btn">Change Title</button>
        </div>
    </Card>
  )
}

export default Expenseitem