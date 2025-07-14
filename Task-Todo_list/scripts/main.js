
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


function getTasks() {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
}

// Save tasks to localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function showTasks() {
  taskList.innerHTML = ""; 

  const tasks = getTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    
    if (task.completed) {
      li.classList.add("completed");
    }

    
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? "checked" : ""}>
      <span class="task-text">${task.text}</span>
      <span class="delete-btn">&#10006;</span>
    `;

    li.querySelector("input").addEventListener("change", () => {
      task.completed = !task.completed;
      saveTasks(tasks);
      showTasks();
      console.log(tasks)
    });

    
    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks.splice(index, 1); 
      saveTasks(tasks);
      showTasks();
    });

    taskList.appendChild(li); 
  });
}


addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return; 

  const tasks = getTasks();

  tasks.push({
    text: taskText,
    completed: false
  });

  saveTasks(tasks);  // Save to localStorage
  showTasks();       // Show the updated task list
  input.value = "";  // Clear the input box
});

// Show saved tasks when the page loads
showTasks();
