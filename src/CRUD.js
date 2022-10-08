
import sync from './assets/images/sync.png';
import enter from './assets/images/subdirectory_arrow_left.png';
import more from './assets/images/more_vert.png';
import dbin from './assets/images/trash.png';

let Taskslist = [];
let ind = 2;

const lst = document.querySelector('.list');

const printtask= (task)=>{
  const litem = document.createElement('li');
  litem.innerHTML = `
  <div><input type="checkbox">&nbsp;&nbsp;<input type="text" value=${task.description} class="complete" readonly>
  </div>
  <img id=${task.description} class="more" src=${more} alt="more_vert">

                    `;
  litem.classList.add('listitem');
  lst.insertBefore(litem, lst.children[ind]);
  ind += 1;
}

export const printtasks= () => {
  lst.innerHTML="";
  lst.innerHTML = `
                  <li class="listitem first">
                      Today's To do
                      <img src=${sync} alt="sync">
                  </li>
                  <li class="listitem">
                    <input class="complete" type="text" placeholder="Add to your list...">
                    <img src=${enter} alt="subdirectory_arrow_left">
                  </li>
                  </li>
                  <li class="listitem last"><button type="button" class="complete">clear all completed</button></li>
                `;
  if (window.localStorage.getItem('tasks')!== null) {
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    Taskslist = tasks;
    Taskslist.forEach((task) => {
      printtask(task);
    });
  }
}


export const add = (description)=>{
  const task = {
    description: description,
    completed: false,
    index: Taskslist.length +1
  }
  printtask(task);
  Taskslist.push(task);
  window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
}

export const edit = (trash)=> {
  trash.parentElement.style.backgroundColor = '#fff890';
  trash.src=dbin;
  trash.classList.add('trash');
  const sib = trash.parentElement.querySelector('.complete');
  sib.addEventListener('click', ()=>{
    sib.readOnly= false;
  })
  sib.addEventListener('change', sib.addEventListener('keypress', e=>{
    if (e.key ==='Enter') {
      sib.readOnly= true;
      Taskslist.find(({ description }) => description === trash.id).description = sib.value;
      window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
      trash.parentElement.style.backgroundColor = '#fff';
      trash.src=more;
    }
  }))
  const Dustbin = document.querySelectorAll('.trash');
  Dustbin.forEach(can=> {
    can.addEventListener('click', (e)=>{
      const {id} = e.target;
      deleteTask(id);
    })
  })
}



const deleteTask= (id)=>{
  document.getElementById(id).parentElement.remove();
  Taskslist = Taskslist.filter((b) => b.description !== id);
  let newind= 1;
  Taskslist.forEach(task=>{
    task.index= newind;
    newind += 1;
  })
  window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
  ind = 2;
}