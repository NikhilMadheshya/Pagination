import React from 'react'
import styles from './App.module.css';
import BalanceInfo from './components/balance/BalanceInfo';
import Form from './components/form/Form';
import History from './components/history/History';

function App() {
    return (
        <div className={styles.container}>
            <h1 className={styles.app_title}>EXPENSE TRACKER</h1>
            <BalanceInfo/>
            <History/>
            <Form/>
            
        </div>
    )
}

export default App
