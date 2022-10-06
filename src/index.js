import _ from 'lodash';
import './style.css';
import sync from './assets/images/sync.png';
import enter from './assets/images/subdirectory_arrow_left.png';
import more from './assets/images/more_vert.png';

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
                      <img src=${sync} alt="sync">
                  </li>
                  <li class="listitem two">
                      Add to your list...
                      <img src=${enter} alt="subdirectory_arrow_left">
                  </li>
                  </li>
                  <li class="listitem last"><button type="button" class="complete">clear all completed</button></li>
                `;

Tasks = _.sortBy(Tasks, [(task) => task.index]);
let ind = 2;
Tasks.forEach((task) => {
  const litem = document.createElement('li');
  litem.innerHTML = `<div><input type="checkbox">&nbsp;&nbsp; ${task.description}</div>
                      <img src=${more} alt="more_vert">
                    `;
  litem.classList.add('listitem');
  lst.insertBefore(litem, lst.children[ind]);
  ind += 1;
});