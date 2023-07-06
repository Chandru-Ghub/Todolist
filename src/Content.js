import React from 'react'
import ContentData from './ContentData'
const Content = ({task,del}) => {
  
return (
<main>
{(task.length)?(

    <ContentData
    task = {task}
    del = {del}
   
    />
    ):(<p className='empty'> your list is empty</p>)
}
</main>
)
}

export default Content