import React from 'react'
import ContentList from './ContentList'
const ContentData = ({task,del,edit}) => {
  return (
    <div className='box'>
    
    {task.map((a,i)=>( 
            <ContentList
           
            a= {a}
            del={del}
            key={i}
            edit={edit}
            />
    ))} 
    </div>
    
  )
}

export default ContentData