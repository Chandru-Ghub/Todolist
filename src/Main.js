import { useRef } from 'react'
// import React from 'react'

const Main = ({handleSubmit,setItems,newItems,setItems2,newItems2,text}) => {
  const inputRef = useRef();
  return (
    <div className='outbox'>
    <form  className="addform" onSubmit={handleSubmit}>
    <h1 className='title'>My todo</h1>
        <div className="container">
        <input type="text" autoFocus value={newItems} ref={inputRef} onChange={(e)=>setItems(e.target.value)} placeholder='todo Name' required />
        <input type="text" value={newItems2} onChange={(e)=>setItems2(e.target.value)} placeholder='todo Description' required />
        <button type='submit' >{text?'ADD':'EDIT'}</button>
        
    </div>
    </form>
</div>
  )
}

export default Main

