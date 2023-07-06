import './App.css';
import { useState } from 'react';
import Content from './Content';
import Main from './Main';
import Filtertask from './Filtertask';
import Footer from './Footer';
import Option from './Option'

function App() {
  const [task, setTask] = useState('');

const options = [
  {value: 'All', text: 'All'},
  {value: 'Completed', text: 'Completed'},
  {value: 'Not Completed', text: 'Not Completed'},
 
];

const [selected, setSelected] = useState(options[0].value);

const handleChange = event => {
  // console.log(event.target.value);
  setSelected(event.target.value);
};



function del(id){
    let rem = task.filter((a)=>(a.id!==id))
    setTask(rem);
    
}

const [newItems,setItems]=useState('');
const [newItems2,setItems2]=useState('');
const handleSubmit=(e)=>{
  e.preventDefault();
  
  if(!newItems ) return;
  addItems(newItems,newItems2);
  setItems('');
  setItems2('');
}
const addItems=(statu,desc)=>{
  const id = task.length? task[task.length-1].id+1:1
  const addNewItem ={id,name:statu,description:desc,status:'Not completed'}
  const listItem = [...task,addNewItem]
  setTask(listItem)
}


  return (
    <div className='body'>
      <Main
      handleSubmit={handleSubmit}
      setItems = {setItems}
      newItems = {newItems}
      setItems2 = {setItems2}
      newItems2 = {newItems2}
      />
      <Option
      handleChange = {handleChange}
      selected = {selected}
      setSelected = {setSelected}
      options={options}
      />

     
      <Content
      task = {task}
      del = {del}
      />
      <Footer
      length = {task.length}/>
   </div>
  );
}

export default App;
