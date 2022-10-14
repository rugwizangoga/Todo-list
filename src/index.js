import './style.css';
import sync from './assets/images/sync.png';
import enter from './assets/images/subdirectory_arrow_left.png';
import {
  printtasks, add, edit, deleteItem, dele,
} from './CRUD.js';
import isComplete from './status_Update.js';

const numEdited = {
  edited: 0,
};

const title = document.getElementById('title');
const addInput = document.getElementById('add');

title.src = sync;
addInput.src = enter;

printtasks();

const newtask = document.querySelector('.complete');

newtask.addEventListener('change', newtask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (newtask.value !== '') {
      add(newtask.value);
      newtask.value = '';
    }
  }
}));

document.addEventListener('click', (e) => {
  const { id } = e.target;
  if (e.target.matches('.more')) {
    edit(id, numEdited);
  }
  if (e.target.matches('.check')) {
    isComplete(id);
  }

  if (e.target.matches('.all')) {
    dele();
  }

  if (numEdited.edited > 0) {
    deleteItem();
  }
});
