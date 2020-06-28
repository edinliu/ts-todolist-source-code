import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useState } from 'react'
import 'bootstrap/scss/bootstrap.scss'
import './index.scss'
import InputAndSubmit from './components/InputAndSubmit'
import TodoList from './components/TodoList'

function Index() {
  const [todoList, setTodoList] = useState([])
  const onSubmit = (value: string) => { setTodoList([...todoList, value]) }
  return (
    <div className="container">
      <div className="pt-5">
        <InputAndSubmit onSubmit={onSubmit} />
        <TodoList todoList={todoList} />
      </div>
    </div>
  )
}
ReactDOM.render(<Index />, document.querySelector("#root"))