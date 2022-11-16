(() => {
  // existing elements of DOM:
  const input_button = document.querySelector("#input_button");
  const textarea_input = document.querySelector("#textarea_input");
  const task_list = document.querySelector("#task_list");

  input_button.addEventListener("click", makeToDoItem);
  //   input_button.addEventListener("keyup", (event) => {
  //     console.log("keyup");
  //     if (event.code == "Enter") {
  //       makeToDoItem();
  //     }
  //   });

  function makeToDoItem() {
    // creating task div and adding his class
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    // creating p, entering textarea value in p and cleaning textarea:
    const taskP = document.createElement("p");
    taskP.append(textarea_input.value);
    textarea_input.value = ``;
    // making done button:
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "DONE";
    doneBtn.classList.add("task_button");
    // creating remove button:
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "REMOVE";
    removeBtn.classList.add("remove_button");
    // creation undo button:
    const undoBtn = document.createElement("button");
    undoBtn.innerHTML = "UNDO";
    undoBtn.classList.add("undo_button");
    // assembling created elements in task:
    taskDiv.appendChild(taskP);
    taskDiv.appendChild(doneBtn);
    taskDiv.appendChild(removeBtn);
    task_list.appendChild(taskDiv);
    // adding event listeners to done, remove and undo buttons:
    // done Button function:
    doneBtn.addEventListener("click", () => {
      taskDiv.classList.add("done_task");
      taskDiv.removeChild(doneBtn);
      taskDiv.removeChild(removeBtn);
      taskDiv.appendChild(undoBtn);
      taskDiv.appendChild(removeBtn);
    });
    // undo Button function:
    undoBtn.addEventListener("click", () => {
      taskDiv.classList.remove("done_task");
      taskDiv.removeChild(undoBtn);
      taskDiv.removeChild(removeBtn);
      taskDiv.appendChild(doneBtn);
      taskDiv.appendChild(removeBtn);
    });
    removeBtn.addEventListener("click", () => {
      const sure = confirm("Are you sure you want to delete this task?");
      if (sure) {
        removeBtn.parentElement.remove();
      }
    });
  }
})();
