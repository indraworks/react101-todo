import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props; //kita desctrut pros dari parent
    return (
      <ul className='list-group'>
        <h3 className='text-center text-capitalize'>todo list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type='button'
          className='btn btn-danger 
        btn-block text-uppercase mt-5'
          onClick={clearList}
        >
          {' '}
          Clear Tasks
        </button>
      </ul>
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

/*
CARA LAIN ya utk item.id di referensian di TodoItem /anakpaling bawah 

 TIDAK BISA 2 LAYER SAJA KALAU UTK Class Component kit agunakan hooks nanti habis ini 


*/

/*
MENGUBAH TAMPILAAN Button denga state 
kit aliaha t padai saat edit item  = true utk itu button harus berganti agar bisa diketahui
kita berasa pada edit 


*/
