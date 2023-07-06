import React from 'react'
import ContentList from './ContentList'
const ContentData = ({task,del}) => {
  return (
    <div className='box'>
    
    {task.map((a)=>( 
            <ContentList
            a= {a}
            del={del}
            key={a.id}
          
            />
    ))} 
    </div>
    
  )
}

export default ContentData