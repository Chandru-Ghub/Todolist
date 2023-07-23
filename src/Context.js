import React, { createContext, useState } from 'react'
export const option = createContext()
const Context = ({children}) => {
    const[selected,setSelected] = useState()
  return (
        <option.Provider
            value={{selected,setSelected}}
        >
            {children}
        </option.Provider>
  )
}

export default Context