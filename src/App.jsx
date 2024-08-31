import { InputBar } from './Components/InputBar'
import { TodoList } from './Components/TodoList'
import { useState } from 'react'


function App() {

  const [itemList, setItemList] = useState([]);

  function addNewItem(itemName){
    setItemList(itemList => [...itemList, itemName]); 
  }

  function deleteItem(e,itemName){
    e.preventDefault();
    let newArr = itemList.filter(item => item !== itemName);
    setItemList(newArr);
  }

  return (
    <>     
      <InputBar addNewItem={addNewItem}/>
      <TodoList itemList={itemList} deleteItem={deleteItem}/>
    </>

  )
}

export default App
