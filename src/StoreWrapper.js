import React, { useEffect, useReducer } from 'react'
import {ExpenseAndIncome as reducer,calculateExpenseAndIncome} from './reducer/ExpenseAndIncome';
import { ExpenseAndIncomeProvider } from './Context/ExpenseAndIncome';


function StoreWrapper({children}) {

const [account,dispatch]=useReducer(reducer,{
    balance:1000,
    income:0,
    expense:0,
    history:[] 
}) 

useEffect(()=>{
calculateExpenseAndIncome(account,dispatch);
},[account.history])

    return (
       <ExpenseAndIncomeProvider value={{account,dispatch}}>
        {children}
       </ExpenseAndIncomeProvider>
    )
}

export default StoreWrapper
