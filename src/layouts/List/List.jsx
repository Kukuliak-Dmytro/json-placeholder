import './List.css';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';

export default function List({ items, Component }){
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage=5;
    const totalPages=Math.ceil(items.length/itemsPerPage);
    const startIndex=(currentPage-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;
    const currentItems=items.slice(startIndex,endIndex);
    const onPageChange=(page)=>setCurrentPage(page);
    return (
        <div className='list-container'>
            <ul className='list-items'>
                {currentItems.map((item) => (
                    <Component key={item.id} item={item}/>
                        
                ))}
            </ul>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />

        </div>

    )
}