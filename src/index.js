import './style.css';
import {printtasks, add, edit} from './CRUD.js'

printtasks();

const newtask = document.querySelector('.complete');

newtask.addEventListener('change', newtask.addEventListener('keypress', e=>{
  if (e.key ==='Enter') {
    add(newtask.value);
    newtask.value='';
  }
}))

document.addEventListener('click', (e)=> {
   if (!e.target.matches('.more')) {
    return;
  }
  const { id } = e.target;
  const trash = document.getElementById(id);
  edit(trash);
});



