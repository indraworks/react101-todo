import React, { Component } from 'react';

class TodoInput extends Component {
  render() {
    //kita destructing dulu props yg masuk sini
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className='container'>
        <div className='card card-body'>
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
                value={item}
                onChange={handleChange}
              />
            </div>
            <button
              type='submit'
              className='btn btn-block bg-success text-light mt-3'
            >
              Enter Task
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoInput;

/*
props dari App.js masuk sini 


*/
