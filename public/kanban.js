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