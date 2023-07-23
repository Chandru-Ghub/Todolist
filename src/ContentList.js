import React, {  useState } from 'react'
const ContentList = ({a,del,edit}) => {
  const[ss,setSs] = useState()
  return (
    <div className='card' key={a.id}>
        <ul>
            <li>Name: {a.name}</li>
            <li className='disc'>Description: {a.description}</li>
            <li><label htmlFor='select'> Status</label>
            <select value={ss} onChange={(e)=>setSs(e.target.value)}>
                    
                      <option >Completed</option>
                      <option >Not completed</option>
                
            </select>
            </li>
           
        </ul>
        <div className="check">
            <button onClick={()=>edit(a.name)} className="edit">Edit</button>
            <button onClick={()=>del(a.id)} className="delete">Delete</button>
        </div>
        {/* <p>hello{ss}</p> */}
    </div>
  )
}

export default ContentList