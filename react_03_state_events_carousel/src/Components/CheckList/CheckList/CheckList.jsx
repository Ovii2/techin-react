import { nanoid } from 'nanoid';
import { useState } from 'react';
import './CheckList.css';

function CheckList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState([]);

  const addItemHandler = () => {
    if (task.trim() === '') return;
    setTasks([...tasks, task]);
    setTask('');
  };

  const handleCheck = (e) => {
    let updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList = updatedList.filter((item) => item !== e.target.value);
    }
    setChecked(updatedList);
  };
  return (
    <div className='tasks'>
      <p>Check list</p>
      <input
        type='text'
        placeholder='Add task'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addItemHandler()}
      />
      <ul className='check-list'>
        {tasks.map((taskItem) => (
          <li key={nanoid()}>
            <input
              type='checkbox'
              onChange={handleCheck}
              value={taskItem}
              checked={checked.includes(taskItem)}
            />
            <input
              className={checked.includes(taskItem) ? 'checked' : ''}
              type='text'
              value={taskItem}
              readOnly
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckList;
