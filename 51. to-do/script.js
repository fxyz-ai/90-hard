function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completed';
        completeButton.onclick = function () {
            removeTask(taskItem);
        };

        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function removeTask(taskItem) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskItem);
}
