import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
const { v4: uuidv4 } = require('uuid');

export class App extends Component {
  //buat statenya
  state = { items: [], id: uuidv4(), item: '', editItem: 'false' };
  //handleChange utk prubahan input
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  //input////
  //handleSubmit utk perubaha field final disimpan distate
  handleSubmit = (e) => {
    e.preventDefault(); //jangan pakai this yg pakai this adalah object state atau props yg datang dari parent
    //update dulu itemsnya
    const newItem = {
      id: this.state.item,
      title: this.state.item,
    };
    //ambil data state trupdate  yg skrg dispreate tambahkan dgn new
    const updItems = [...this.state.items, newItem];
    //setStatenya
    this.setState(
      {
        items: updItems,
        item: '',
        uuid: uuidv4(),
        editItem: 'false',
      },
      console.log(this.state.items)
    );
  };

  //list
  handleDelete = (id) => {
    const filteredItem = this.items.map((item) => item.id !== id);
    this.setState({
      items: filteredItem,
    });
  };

  handleEdit = (id) => {
    const nonItemsCheck = this.items.map((item) => item.id !== id); //items yg gak di check
    const checkItem = this.items.find((item) => item.id === id);
    //update state
    this.setState({
      items: nonItemsCheck,
      item: checkItem.title,
      id: id,
      editItem: true,
    });
  };

  render() {
    return (
      <div className='.container'>
        <div className='col-sm-10 col-md-8 mt-2'>
          <div className='row'>
            <h3 className='mx-auto text-capitalize'>todo list</h3>
            <TodoInput
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
