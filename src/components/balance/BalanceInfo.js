import React, { useContext } from 'react';
import styles from './BalanceInfo.module.css';
import {ExpenseAndIncome} from '../../Context/ExpenseAndIncome'

function BalanceInfo() {
    const {account}=useContext(ExpenseAndIncome);
    return (
        <div className={styles.balanceInfo}>
            <div className={styles.titleInfo}>
             <h3>Your Account Balance</h3>
              <h1>Rs.{account.balance}</h1>
            </div>
            <div className={styles.expense_and_income_info}>
              <div className={styles.income}>
                <h3>INCOME</h3>
                <h2>Rs.{account.income}</h2>
              </div>
              <div className={styles.expense}>
                <h3>EXPENSE</h3>
                <h2>Rs.{account.expense}</h2>
              </div>
            </div>
        </div>
    )
}

export default BalanceInfo
