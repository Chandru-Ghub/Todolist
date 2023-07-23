import './App.css';
import { useState } from 'react';
import Content from './Content';
import Main from './Main';
import Footer from './Footer';
import Option from './Option'

function App() {
  const [task, setTask] = useState('');


const[value,setValue] = useState()
const[text,setText] = useState(true)
const[indata,setIndata] = useState(0)
function del(id){
    let rem = task.filter((a)=>(a.id!==id))
    setTask(rem);
    
}
function edit(id){
    let editData = task.find((a)=>a.name==id)
    setItems(editData.name)
    setItems2(editData.description)
    setText(false)
    console.log(id)
    setIndata(id)
}
const [newItems,setItems]=useState('');
const [newItems2,setItems2]=useState('');
const handleSubmit=(e)=>{
  e.preventDefault();
  
    if(indata){
      let res = task.find((a)=>a.name==indata)
      console.log(res)
      let update = task.map((a)=>a.name==res.name?
      ({name:newItems,description:newItems2})
      :({name:a.name,description:a.description})
      )
      console.log(update)
      setTask(update)
      setItems('')
      setItems2('')
     setText(true)
     setIndata(0)
    
    }

    else if(newItems != '',newItems2 != ''){

      const add = [...task,{name:newItems,description:newItems2}]
      setTask(add)
      setItems('')
      setItems2('')
    }
    

   
}



  return (
    <div className='body'>
      {/* <p>welcome{indata}</p> */}
      <Main
      handleSubmit={handleSubmit}
      setItems = {setItems}
      newItems = {newItems}
      setItems2 = {setItems2}
      newItems2 = {newItems2}
      text = {text}
      setText = {setText}
      />
      <Option />

     
      <Content
      task = {task}
      del = {del}
      edit={edit}
      />
      <Footer
      length = {task.length}/>
   </div>
  );
}

export default App;
