import _ from 'lodash';
import './style.css';

const lst = document.querySelector('.list');

const performers = [
  {
    description: 'Wash the dishes',
    completed: true,
    index: 2
  },
  {
    description: 'physical execise',
    completed: false,
    index: 0
  },
  {
    description: 'complete the To Do list project',
    completed: false,
    index: 1
  },
];


lst.innerHTML = `
                  <li class="listitem first">
                      Today's To do
                      <i class="fa fa-refresh" aria-hidden="true"></i>  
                  </li>
                  <li class="listitem two">
                      Add to your list...
                      <i class="fa-thin fa-arrow-turn-down-left"></i>
                  </li>
                 
                  <li class="listitem">
                      <div><input type="checkbox">&nbsp;&nbsp; complete the To Do list project</div>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                  </li>
                  <li class="listitem last"><button type="button" class="complete">clear all completed</button></li>
                `

const litem = document.createElement('li');

litem.innerHTML = `<div><input type="checkbox">&nbsp;&nbsp; Wash the dishes</div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  `
litem.classList.add('listitem');

lst.insertBefore(litem, lst.children[2]);