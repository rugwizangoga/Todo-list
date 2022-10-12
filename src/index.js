import './style.css';
import { printtasks, add, edit, deleteItem, dele } from './CRUD.js';
import { isComplete } from './status_Update.js';

let numEdited= {
  edited: 0
};

printtasks();

const newtask = document.querySelector('.complete');

newtask.addEventListener('change', newtask.addEventListener('keypress', (e) => {
  console.log('add something?')
  if (e.key === 'Enter') {
    add(newtask.value);
    newtask.value = '';
  }
}));

document.addEventListener('click', (e) => {
  const { id } = e.target;
  if (e.target.matches('.more')) {
  edit(id, numEdited);
  }
  if (e.target.matches('.check')){
    isComplete(id);
  }

  if (e.target.matches('.all')){
    dele()
  }

  if(numEdited.edited > 0) {
    deleteItem();
  }

});
