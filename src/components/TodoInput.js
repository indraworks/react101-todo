import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    //kita destructing dulu props yg masuk sini
    const { item, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className='card card-body my-3'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <div className='input-group-text bg-success text-white'>
                <i className='fas fa-book fa-1x'></i>
              </div>
            </div>
            <input
              type='text'
              className='form-control text-capitalize'
              placeholder='add todo item'
              name={item}
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className={
              editItem
                ? 'btn btn-block bg-success text-light mt-3'
                : 'btn btn-block bg-danger text-light mt-3'
            }
          >
            {editItem ? 'Edit Task' : 'Enter Task(GO)'}
          </button>
        </form>
      </div>
    );
  }
}
export default TodoInput;

/*
props dari App.js masuk sini 


*/
