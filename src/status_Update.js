let Taskslist = [];
const isComplete = (checkid) => {
  const checkbox = document.getElementById(checkid);
  Taskslist = JSON.parse(window.localStorage.getItem('tasks'));
  if (checkbox.checked) {
    const sibling = checkbox.parentElement.querySelector('.complete');
    sibling.classList.add('active');
    Taskslist.find(({ description }) => description === sibling.value).completed = true;
    window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
  } else {
    const sibling = checkbox.parentElement.querySelector('.complete');
    sibling.classList.remove('active');
    Taskslist.find(({ description }) => description === sibling.value).completed = false;
    window.localStorage.setItem('tasks', JSON.stringify(Taskslist));
  }
};

export default isComplete;