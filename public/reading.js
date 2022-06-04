function openTab(event, content){
    let i, resourceContent, resourceButtons;

    resourceContent = document.getElementsByClassName("resourceContent");
    for(i=0; i < resourceContent.length; i++){
        resourceContent[i].style.display = "none";
    }

    resourceButtons = document.getElementsByClassName("resourceButtons");
    for(i=0; i < resourceButtons.length; i++){
        resourceButtons[i].className = resourceButtons[i].className.replace("active","" )
    }

    document.getElementById(content).style.display = "block";
    event.currentTarget.className += " active"; 
}

document.getElementById("defaultOpen").click();



const resources = document.querySelectorAll(".resource")
const resourceTopic = document.querySelectorAll(".topic")

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
taskSubmit.addEventListener("click", createResource );

function createResource () {
    const resourceDiv= document.createElement("div");
    const inputValue = document.getElementById("resourceInput").value;
    const text = document.createTextNode(inputValue);
    
    resourceDiv.appendChild(text);
    resourceDiv.classList.add("resource");
    

    const span = document.createElement("span");
    const spanText = document.createTextNode("\u00D7");
    span.classList.add("close");
    span.appendChild(spanText);

    resourceDiv.appendChild(span);

    noTopic.appendChild(resourceDiv);

    span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
      });

    resourceForm.classList.remove("active");
    overlay.classList.remove("active");

    document.getElementById('resourceInput').value = ""
    
}

const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
