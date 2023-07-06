import React from 'react'

const ContentList = ({a,del}) => {
  return (
    <div className='card' key={a.id}>
        <ul>
            <li>Name: {a.name}</li>
            <li className='disc'>Description: {a.description}</li>
            <li><label htmlFor='select'> Status</label>
            <select className='down' name="staus" id="select">
                <option value="status">Completed</option>
                <option value="status">Not Completed</option>
            </select>
            </li>
            
        </ul>
        <div className="check">
            <button className="edit">Edit</button>
            <button onClick={()=>del(a.id)} className="delete">Delete</button>
        </div>
    </div>
  )
}

export default ContentList