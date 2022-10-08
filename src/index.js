import './style.css';
import { printtasks, add, edit, dele } from './CRUD.js';
import { isComplete } from './status_Update';

printtasks();

const newtask = document.querySelector('.complete');

newtask.addEventListener('change', newtask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add(newtask.value);
    newtask.value = '';
  }
}));

document.addEventListener('click', (e) => {
  if (e.target.matches('.more')) {
  const { id } = e.target;
  const trash = document.getElementById(id);
  edit(trash);
  }
  else if (e.target.matches('.check')){
    const {id}= e.target;
    isComplete(id);
  }

  else if (e.target.matches('.all')){
    dele()
  }
  else {
    return;
  }
});

