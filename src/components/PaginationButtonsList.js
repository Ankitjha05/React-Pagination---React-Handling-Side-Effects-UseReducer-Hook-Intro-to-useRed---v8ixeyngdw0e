import React from 'react'
import { Post } from './Post'
const PaginationButtonsList = (props) => {
    let {lists,increment,page}=props
    return (
        <div className="pagination-buttons-list">
            {lists.map((ele,index)=>{
                return(
                    <>
                    <Post key={index} lists={ele}/>
                    </>
                )
            })}
            <button id={`button-${page}`} className='active-btn' disabled={page===20} onClick={increment}>{page}</button>
        </div>
    )
}

export { PaginationButtonsList }