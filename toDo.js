let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", addTask);

function addTask() {
  const task = inp.value.trim(); // Remove leading/trailing spaces
  if (task === "") {
    alert("Please enter a task before adding!");
    return; // Exit the function if the task is empty
  }

  const li = document.createElement("li");
  li.innerText = task;

  const delBtn = document.createElement("button");
  delBtn.innerText = "Remove";
  delBtn.classList.add("delete");

  // Add the event listener for removal here
  delBtn.addEventListener("click", function () {
    const par = this.parentElement;
    par.remove();
  });

  li.appendChild(delBtn); // Append the "Remove" button to the list item
  ul.appendChild(li);
  inp.value = "";
}
