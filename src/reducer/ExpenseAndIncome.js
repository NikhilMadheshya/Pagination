
export const calculateExpenseAndIncome=(state,dispatch)=>
{
    const history=state.history;
    if(history.length>0)
   {
   let income=state.income;
   let expense=state.expense;
   let balance=state.balance;

    expense=history.reduce((exp,history)=>{
  if(history.money<0)
    {
        return exp-history.money
    }
    else{
        return exp;
    }
  },0)

   income=history.reduce((exp,history)=>{
    if(history.money>0)
      {
          return exp+history.money
      }
      else{
          return exp;
      }
    },0)

  balance=(balance+income)-expense;

  dispatch({type:'UPDATE_ACCOUNT',payload:{income,history,expense,balance}})
  }
   
}




export const ExpenseAndIncome=(state,action)=>{

 switch(action.type)
 {
     case 'UPDATE_ACCOUNT':
         return {...state,...action.payload}    
     default: return state;
 }   
}

