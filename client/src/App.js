import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import './App.css';
import ToDoList from './ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="row">
          <div className="col-1 header__logo">
            <img src="./lemon-slice.jpg" alt="orange slice" />
          </div>
          <div className="col-11">
            <div className="row">
              <h1>To Do List</h1>
            </div>
            <div className="row">
              <p className="app-desc">A really simple to do list. All data is stored in browser localstorage.</p>
            </div>

          </div>
        </header>
        <section>
          <ToDoList />
        </section>
      </div>
    );
  }
}

export default App;
