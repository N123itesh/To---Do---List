function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <div class="actions">
        <button onclick="toggleComplete(this)">✔</button>
        <button onclick="deleteTask(this)">X</button>
      </div>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }

  function toggleComplete(btn) {
    const li = btn.parentElement.parentElement;
    li.classList.toggle("completed");
  }

  function deleteTask(btn) {
    const li = btn.parentElement.parentElement;
    li.remove();
  }