document.querySelector('.inputone').addEventListener('click', function() {
    const taskInput = document.querySelector('.input');
    const taskText = taskInput.value;
    const errorMessageDiv = document.querySelector('.error-message');

    // Clear previous error message
    errorMessageDiv.textContent = '';

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        const taskList = document.querySelector('.task-list');
        taskList.prepend(li);
        taskInput.value = ''; // Clear input field
    } else {
        errorMessageDiv.textContent = 'Please enter a task!'; // Show error message
    }
});
