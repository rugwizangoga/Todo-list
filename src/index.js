import _ from 'lodash';
import './style.css';

const lst = document.querySelector('.list');

let Tasks = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 1,
  },
  {
    description: 'complete the To Do list project',
    completed: false,
    index: 2,
  },
  {
    description: 'physical execise',
    completed: false,
    index: 0,
  },
];

lst.innerHTML = `
                  <li class="listitem first">
                      Today's To do
                      <i class="fa fa-refresh" aria-hidden="true"></i>
                  </li>
                  <li class="listitem two">
                      Add to your list...
                      <i class="material-icons">subdirectory_arrow_left</i>
                  </li>
                  </li>
                  <li class="listitem last"><button type="button" class="complete">clear all completed</button></li>
                `;

Tasks = _.sortBy(Tasks, [(task) => task.index]);
let ind = 2;
Tasks.forEach((task) => {
  const litem = document.createElement('li');
  litem.innerHTML = `<div><input type="checkbox">&nbsp;&nbsp; ${task.description}</div>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    `;
  litem.classList.add('listitem');
  lst.insertBefore(litem, lst.children[ind]);
  ind += 1;
});