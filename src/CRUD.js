/* eslint-disable max-len */

import more from './assets/images/more_vert.png';
import dbin from './assets/images/trash.png';

let Taskslist = [];
let PostionToInsert = 2;

const List = document.querySelector('.list');

const printtask = (task) => {
  const listItem = document.createElement('li');
  const checkBoxId = task.description + task.index.toString();
  if (task.completed === true) {
    listItem.innerHTML = `
    <div><input id= ${checkBoxId} class='check' type="checkbox" checked=true>&nbsp;&nbsp;<input type="text" value=${task.description} class="complete active" readonly>
    </div>
    <img id=${task.description} class="more" src=${more} alt="more_vert">
  
                      `;
  } else {
    listItem.innerHTML = `
  <div><input id= ${checkBoxId} class='check' type="checkbox">&nbsp;&nbsp;<input type="text" value=${task.description} class="complete" readonly>
  </div>
  <img id=${task.description} class="more" src=${more} alt="more_vert">

                    `;
  }
  listItem.classList.add('listitem');
  List.insertBefore(listItem, List.children[PostionToInsert]);
  PostionToInsert += 1;
};

export const printtasks = () => {
  [...List.children].forEach((child) => {
    if (child.querySelector('.more')) {
      List.removeChild(child);
    }
  });
  if (window.localStorage.getItem('tasks') !== null) {
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    Taskslist = tasks;
    Taskslist.forEach((task) => {
      printtask(task);
    });
  }
};

export const add = (description) => {
  const task = {
    description,
    completed: false,
    index: Taskslist.length + 1,
  };
  printtask(task);
  Taskslist.push(task);
  window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
};

const deleteTask = (taskId) => {
  document.getElementById(taskId).parentElement.remove();
  Taskslist = Taskslist.filter((task) => task.description !== taskId);
  let newindex = 1;
  Taskslist.forEach((task) => {
    task.index = newindex;
    newindex += 1;
  });
  window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
  PostionToInsert -= 1;
};

export const edit = (id, numEdited) => {
  const trash = document.getElementById(id);
  trash.parentElement.style.backgroundColor = '#fff890';
  trash.src = dbin;
  trash.classList.add('trash');
  numEdited.edited += 1;
  const siblingInput = trash.parentElement.querySelector('.complete');
  siblingInput.addEventListener('click', () => {
    siblingInput.readOnly = false;
  });
  siblingInput.addEventListener('change', siblingInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      siblingInput.readOnly = true;
      Taskslist.find(({ description }) => description === trash.id).description = siblingInput.value;
      window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
      trash.classList.remove('trash');
      trash.parentElement.style.backgroundColor = '#fff';
      trash.src = more;
      numEdited.edited -= 1;
    }
  }));
};

export const deleteItem = () => {
  const delButtonsList = document.querySelectorAll('.trash');
  delButtonsList.forEach((deleteButton) => {
    deleteButton.addEventListener('click', (e) => {
      const { id } = e.target;
      deleteTask(id);
    });
  });
};

export const dele = () => {
  const tasky = JSON.parse(window.localStorage.getItem('tasks'));
  Taskslist = tasky;
  Taskslist = Taskslist.filter((b) => b.completed !== true);
  let newind = 1;
  Taskslist.forEach((task) => {
    task.index = newind;
    newind += 1;
  });
  window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
  PostionToInsert = 2;
  printtasks();
};
