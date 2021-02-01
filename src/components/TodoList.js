import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    const { items, handleDelete, handleEdit, clearList } = this.props; //kita desctrut pros dari parent
    return (
      <div className='container'>
        <div className='card card-body mt-2'>
          <ul className='list-group'>
            <h3 className='text-center text-capitalize mt-2'>todo item</h3>
            {items.map((item) => (
              // <h4 className='list-group-item' key={item.id}>
              //   {item.title}
              // </h4>
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => this.handleDelete(item.id)}
                handleEdit={() => this.handleEdit(item.id)}
                clearList={this.clearList}
              />
            ))}
          </ul>
          <button className='bg-success text-light btn btn-block mt-5'>
            Clear Task
          </button>
        </div>
      </div>
    );
  }
}

/*
method program utama utk smua di bawah ini ada di app.js parent program utama 
kmudia masuk kekomponent list TOdoList yg mana utk maping list2 item dari Todo Input
nah perindividu itemnya  tersebut kit abuatkan disampingnya button edit delete 
nah oleh karenanya dibuat indovodu kit abuat chiled lag 
nah props yg di list masuk lagi lwat TodoIntem sbgai props lagi 
utk item dimasukan lagi ke handle2 trsbut trutama utk handleDelete (item.id) 
dan juga handleEdit(item.id)
shingga waktu pasing  props di TodoItem component anak pling bawah jadi tahu 
item.id mana yg didelete /atau diedit
 
<TodoItem
                item={this.items}
                handleDelete={()=>this.handleDelete(item.id)}
                handleEdit={()=>this.handleEdit(item.id)}
                clearList={this.clearList}
              />

Keterangan pakai callback functionya karena manggil function yg ada di parent atas

*/
