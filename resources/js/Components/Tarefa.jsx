import React, { useState, useRef, useEffect } from 'react';

const Tarefa = () => {
  const [tasks, setTasks] = useState([{ text: 'Teste', completed: false }, { text: 'Testando', completed: false }]);
  const [newTask, setNewTask] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');
  const inputRef = useRef(null);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEditClick = (index, text) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const handleEditChange = (e) => {
    setEditingText(e.target.value);
  };

  const handleEditSubmit = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: editingText } : task
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [tasks]);

  return (
    <div>
      <ul className=" mt-5 list-none space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(index)}
              className="form-checkbox h-5 w-5 text-green-500 rounded"
            />
            {editingIndex === index ? (
              <input
              type="text"
              value={editingText}
              onChange={handleEditChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleEditSubmit(index);
                }
              }}
              className="form-input ml-2 block w-full rounded bg-transparent focus:bg-transparent focus:border-transparent focus:ring-0 font-interMedium"
            />
            ) : (
              <span
                className={`ml-2 ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}
                onClick={() => handleEditClick(index, task.text)}
              >
                {task.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarefa;
