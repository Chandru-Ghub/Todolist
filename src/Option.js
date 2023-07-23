import React, { useContext } from 'react'
import { option } from './Contextapi'
const App = () => {
  const{selected,setSelected} = useContext(option)

  return (
    <div className='sfilter'>
      <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
          <option >All</option>
          <option >Completed</option>
          <option >Not completed</option>
      </select>
      {/* <p>filter{selected}</p> */}
    </div>
  );
};

export default App;
