import React,{useState,useEffect} from 'react'
import Pages from './Pages';


function App() {
const [data,setData]=useState([]);
   
useEffect(()=>{
 (async ()=>{
const response= await fetch('https://jsonplaceholder.typicode.com/posts');
const data=await response.json();
setData(data);
 })()

   },[])

    return (
        <>
        {
            data.length>0?
            <Pages data={data} />:<p>Loading...</p>
        }
        </>
    )
}

export default App
