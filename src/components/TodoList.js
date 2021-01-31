import React, { Component } from 'react';
import item from './TodoItem';
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h3>hello from todo list</h3>
        <item />
      </div>
    );
  }
}
