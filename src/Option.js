import {useState} from 'react';

const App = ({selected,setSelected,handleChange,options}) => {
 

  return (
    <div className='sfilter'>
      <select value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
