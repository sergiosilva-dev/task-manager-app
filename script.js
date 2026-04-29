// Select elements
const form = document.querySelector(".task-form");
const input = form.querySelector("input");
const taskList = document.querySelector(".task-list");

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value.trim();

  // Prevent empty tasks
  if (taskText === "") return;

  // Create task element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add to list
  taskList.appendChild(li);

  // Clear input
  input.value = "";
});
