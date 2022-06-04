// returns the task card class//
const tasks = document.querySelectorAll(".task")

// returns the kanban column status class//
const taskStatus = document.querySelectorAll(".status")

// initialise value of draggable task
let draggableTask = null;

//for each task add an event listener that listens for start of dragging start or end action and fires the dragStart and dragEnd function//
tasks.forEach((task) => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
});


function dragStart(){
    // draggableTask is set to the task elements//
    draggableTask = this;
    console.log("dragStart");
}

function dragEnd(){
    draggableTask = null;
    console.log("dragEnd");
}

//for each column status add an event listener that listens for the entering, leaving, dropping, and going over of the task cards and fire their respective functions//
taskStatus.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);

});


// e enables card to be dragged over and dropped into column//
function dragOver(e) {
    e.preventDefault();
    console.log("dragOver");
  }

function dragEnter(){
    console.log("dragEnter");
}

function dragLeave(){
    console.log("dragLeave");

}

function dragDrop(){
    this.appendChild(draggableTask)
}


//  Modal Task Form //

// returns button with data-target-modal attached to it //
const btns = document.querySelectorAll("[data-target-modal]");

// returns close span class//
const close_modals = document.querySelectorAll(".close-modal");

// returns overlay id//
const overlay = document.getElementById("overlay");

// returns submit button//
const taskSubmit = document.getElementById("taskSubmit");

// returns close button//
const closeButtons = document.querySelectorAll(".close");

// For each button when clicked, open the modal task form mand make overlay active//
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

// For each close button when clicked, remove the active for the modal task form and overlay inorder to close/remove both//
close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// When window is clicked on overlay remove the active element of the modal task form and overlay inorder to close them //
window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};



function createTask () {

  // creates new div from document//
  const taskDiv= document.createElement("div");

  //Returns value of taskinput id//
  const inputValue = document.getElementById("taskInput").value;

  //creates a text node  with input value and appends it to the document//
  const text = document.createTextNode(inputValue);
    
  //taskDiv contains inputed  'text' text node//
  taskDiv.appendChild(text);

// adds task elements to taskDiv//
  taskDiv.classList.add("task");

  // Sets attribute of created div to be draggable and set to true//
  taskDiv.setAttribute("draggable", "true");

  //return close element //
  const span = document.createElement("span");

  //creates a text node and appends it to the  task card//
  const spanText = document.createTextNode("\u00D7");

  // add class "close" to span//
  span.classList.add("close");

  // adds text node to span//
  span.appendChild(spanText);

  // adds span to taskDiv//
  taskDiv.appendChild(span);

  noStatus.appendChild(taskDiv);

  //when span close button is selected close the task card//
  span.addEventListener("click", () => {
  span.parentElement.style.display = "none";
  });

  taskForm.classList.remove("active");
  overlay.classList.remove("active");

  document.getElementById('taskInput').value = ""
  taskDiv.addEventListener("dragstart", dragStart);
  taskDiv.addEventListener("dragend", dragEnd);
    
}

//When submit button is clicked fire creatTask function//
taskSubmit.addEventListener("click", createTask );

//When close buttons are clicked close/ dont display the task card //
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
