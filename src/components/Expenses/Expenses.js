
import ExpensesList from './ExpensesList';
import './Expenses.css'
import Card from "../UI/card"
import ExpensesFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesChart from '../Chart/ExpensesChart';
const Expenses = ({items}) => {
  const [expenseFilItems, setExpenseFilItems] = useState('2019');
  const filterItems = item =>{
    setExpenseFilItems(item)
  }
const expenseFilItem = items.filter((filtItems) =>{
  return filtItems.date.getFullYear().toString() === expenseFilItems;
})
  return (
    <li className='expenses-list'>
      <Card className ="expenses">
        <ExpensesFilter getValue = {expenseFilItems} itemsFilter = {filterItems}/>
        <ExpensesChart expenses={expenseFilItem} />
        <ExpensesList item ={expenseFilItem } />
      </Card>
    </li>
  )
}

export default Expenses