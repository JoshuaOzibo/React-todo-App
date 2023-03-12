import React from 'react'
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';
import {useState} from "react";
const NewExpense = (props) => {
  
const [editExpenseBtn, setEditExpenseBtn] = useState(false);

  const saveExpenseData = (expenseDatas) =>{
    setEditExpenseBtn(false)
    const expenseId = {
      ...expenseDatas,
      id: Math.random().toString(),
    };
    props.savedItems(expenseId);
  }
  const newExpenseBtn =() =>{
    setEditExpenseBtn(true);
  }
  const cancleBtn=() =>{
    setEditExpenseBtn(false)
  }
  return (
    <div className='new-expense'>
        {!editExpenseBtn && <button onClick={newExpenseBtn}>Add New Expense</button>}
        {editExpenseBtn && <ExpenseForm cancleBtn={cancleBtn} onSaveExpenseData = {saveExpenseData}/>}
        
    </div>
  )
}

export default NewExpense;