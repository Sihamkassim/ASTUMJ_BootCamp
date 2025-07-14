function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" />
    <span class="task-text">${task}</span>
    <span class="delete-btn">❌</span>
  `;

  // Toggle 'completed' class when checkbox is clicked
  li.querySelector("input").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove task when delete button is clicked
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
