import {useState} from 'react';


export const usePagination=(perPageRecords,totalRecords)=>{

const totalPages=Math.ceil(totalRecords/perPageRecords);

const [startPageIndex,setStartPageIndex]=useState(0)
const [endPageIndex,setEndPageIndex]=useState(perPageRecords-1);
const [currentPage,setCurrentPage]=useState(1);

const dispPage=(pageNo)=>{

setCurrentPage(pageNo);

let start_page_index=(perPageRecords*pageNo)-perPageRecords; 
let end_page_index=(perPageRecords*pageNo)-1; 

setStartPageIndex(start_page_index);

if(end_page_index>totalRecords)
{
 setEndPageIndex(totalRecords-1);
}
else{
 setEndPageIndex(end_page_index);
}

}    

return [
totalPages,
startPageIndex,
endPageIndex,
currentPage,
dispPage
]
}