import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import List from './components/List';
import { AddTodo } from './redux/actions/actions';

function App() {
  const [value, setValue] = useState('')
  const dispatch =useDispatch()

  const valueChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const addTodoHandler = () => {
    if (value !== '') {
      dispatch(AddTodo(value, Math.random().toString()))
    }
    setValue('')

  }

  const enterHandler = (e) => {
    if(e.key === 'Enter') {
      dispatch(AddTodo(value, Math.random().toString()))
    }
    
  }
  

  return (
    <Cont className="App">
      <input value={value} onChange={valueChangeHandler} onKeyDown={enterHandler} placeholder='New task ...'/>
      <button onClick={addTodoHandler}>ADD</button>
      <List/>
    </Cont>
  );
}

const Cont = styled.div`
background-color: white;
width: 600px;
border-radius: 5px;
padding: 45px;
& input {
  width: 500px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid gray;
  font-size: 14px;
}
& button {
  width: 60px;
  margin-left: 7px;
  padding: 11px;
  background-color: #00BFFF;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
`

export default App;
