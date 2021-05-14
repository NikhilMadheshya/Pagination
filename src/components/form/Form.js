import React, { useContext, useState } from 'react';
import { ExpenseAndIncome } from '../../Context/ExpenseAndIncome';
import styles from './Form.module.css';
import {generateUniqueId} from '../../helper/generateUniqueId';


function Form() {

const [info,setInfo]=useState({money:0,whereby:'',id:''});

const {account,dispatch}=useContext(ExpenseAndIncome)

const handleChange=({target:{name,value}})=>{
  
    if(name==="money")
       value=Number(value);

    setInfo({...info,[name]:value})
}

const addTransaction=()=>{
if(info.money===0 || info.whereby==='')
{
    alert('Please fill all the fields');
    return 0;
}
if(isNaN(info.money))
{
    alert('Money should be digits bro !');
    return 0; 
}

let balance=account.balance;
let income=account.income;
let expense=account.expense;
let history=account.history;
let id=generateUniqueId(5);

if(info.money>0){
income+=info.money;
balance+=info.money;
}
else{
expense-=(info.money)
balance+=info.money
}

history.push(info);

dispatch({type:'UPDATE_ACCOUNT',payload:{
balance,
income,
expense,
history,
id
}})

}


    return (
        <div className={styles.form}>
        <h2 className={styles.title}>Add New Transaction</h2>
        <div className={styles.field}>
         <h2>Info</h2>   
          <input type="text" name="whereby"  onChange={handleChange} placeholder="Where you pay or paid by" />
        </div>
        <div className={styles.field}>
         <h2>Amounts</h2>
          <h3>(negative - expense,postitive + income)</h3>   
          <input type="text" name="money" onChange={handleChange}  placeholder="Enter transaction amount" />
        </div> 
        <button className={styles.transactionButton} onClick={addTransaction}>
            Add Transaction
        </button>   
        </div>
    )
}

export default Form
