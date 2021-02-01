import React, { Component } from 'react';

export default class TodoItem extends Component {
  //dianak yg no3  dipassing method yg di app.js jadi props disini

  render() {
    const { id, title, handleEdit, handleDelete } = this.props;
    return (
      <div className='list-group-item text-capitalize d-flex justify-content-between my-2'>
        <h6>{title}</h6>
        <div className='todo-icon'>
          <span className='mx-2 text-success' onClick={handleEdit}>
            <i className='fas fa-pen'></i>
          </span>
          <span className='mx-2 text-danger' onClick={handleDelete}>
            <i className='fas fa-trash'></i>
          </span>
        </div>
      </div>
    );
  }
}

/*
POINT PENTING JALANNYA PROGRAM BEGINI 
dari anak child todolist no.3
 <div className='todo-icon'>
          <span className='mx-2 text-success onClick={handleEdit}'>
            <i className='fas fa-pen'></i>
          </span>
          <span className='mx-2 text-danger onClick={handleDelete}'>
            <i className='fas fa-trash'></i>
          </span>

          penjelasannya:
yg ini dan temannya  :onClick={handleEdit}
ktika tombol diclikc direferensikan manggil props yg dari parent tadi yg masuk
 nah di todolist ini manggil call back functionya (parent2 )
   onClick={()=>handleEdit(items.id)}  //items di pasing disini propsnya
 nah di todolist ini manggil call back functionya (parent1/parent utama ) ()=>
 nah di program utma di App.js

 disini maggil handleDelete dimana id yg dipilih dipassing
 handleDelete={this.handleDelete} 
  (sblah kiri props utk keanak)
  (sblah kanan adalah metode handledelete yg dipasing)
  this.handleDelete
  
*/
