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

  // Create span for text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Toggle completed state
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");

  // Delete event
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // Append elements
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Add to list
  taskList.appendChild(li);

  // Clear input
  input.value = "";
});
