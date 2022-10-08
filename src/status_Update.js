import { Taskslist } from "./CRUD.js";
export const isComplete = (checkid)=>{

  const checkbox= document.getElementById(checkid);

  if(checkbox.checked) {
    const sibling = checkbox.parentElement.querySelector('.complete');
    sibling.classList.add('active');
    Taskslist.find(({ description }) => description === sibling.value).completed = true;
    window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
  }

}