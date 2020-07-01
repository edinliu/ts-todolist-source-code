import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import './index.scss';
import TodoApp from './components/TodoApp';

ReactDOM.render(<TodoApp />, document.querySelector('#root'));
