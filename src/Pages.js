import React from 'react'
import {usePagination} from './hook/Pagination';
import {Pagination} from '@material-ui/lab'

function Pages({data}) {

    const [
totalPages,
startPageIndex,
endPageIndex,
currentPage,
dispPage
]=usePagination(5,data.length);




    return (
        <div   style={{
            margin:'10px auto',fontFamily:'sans-serif',width:'90%'
        }}>
        <h1>User Posts</h1>
        
        {
               (()=>{
                
                const dispPosts=[];

                for(let i=startPageIndex;i<=endPageIndex;i++)
                   {
                       dispPosts.push(
                           <div key={data[i].id}>
                           <h3><span>{i+1}. </span> {data[i].title}</h3>
                           <p>{data[i].body}</p>
                           </div>
                       )
                   }

               return dispPosts;

               })()

            }
            
            <Pagination count={totalPages}  color="primary" onChange={(event,value)=>dispPage(value)} />
        </div>
    )
}

export default Pages
