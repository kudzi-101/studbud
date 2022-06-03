const tasks = document.querySelectorAll(".task")
const taskStatus = document.querySelectorAll(".status")
let draggableTask = null;

tasks.forEach((task) => {
    task.addEventListener("dragstart", dragStart);
    task.addEventListener("dragend", dragEnd);
});

function dragStart(){
    draggableTask = this;
    console.log("dragStart");
}

function dragEnd(){
    draggableTask = null;
    console.log("dragEnd");
}

taskStatus.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);

});

function dragOver(e) {
    e.preventDefault();
    //   console.log("dragOver");
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



const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

const taskSubmit = document.getElementById("taskSubmit");
taskSubmit.addEventListener('click', createTask );

function createTask (s) {
    const taskDiv= document.createElement("div");
    const inputValue = document.getElementById("taskInput").value;
    const text = document.createTextNode(inputValue);
    
    taskDiv.appendChild(text);
    taskDiv.classList.add("task");
    taskDiv.setAttribute("draggable", "true");

    const i= document.createElement("i");
    const icon= document.createTextNode("fa-solid fa-xmark");
    i.classList.add("close");
    i.appendChild(icon);
    document.body.appendChild(i)

    taskDiv.appendChild(i);

    noStatus.appendChild(taskDiv);

    taskForm.classList.remove("active");
    overlay.classList.remove("active");

    taskDiv.addEventListener("dragstart", dragStart);
    taskDiv.addEventListener("dragend", dragEnd);
}

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
