
/* SHOW AND HIDE RESOURCE LIST TABS */

function openTab(event, content){

     //initialising variables//
    let i, resourceContent, resourceButtons;

    // return resourcecontent class//
    resourceContent = document.getElementsByClassName("resourceContent");

    // Makes resource content not be displayed //
    for(i=0; i < resourceContent.length; i++){
        resourceContent[i].style.display = "none";
    }

    // return resource Buttons class//
    resourceButtons = document.getElementsByClassName("resourceButtons");

    // when resource button is selected make its class become active//
    for(i=0; i < resourceButtons.length; i++){
        resourceButtons[i].className = resourceButtons[i].className.replace("active","" )
    }

    // display resource content in document//
    document.getElementById(content).style.display = "block";
    event.currentTarget.className += " active"; 
}

document.getElementById("defaultOpen").click();


//  RESOURCE LIST POPOUT FORM //

// returns resource class//
const resources = document.querySelectorAll(".resource")

// returns topic class//

const resourceTopic = document.querySelectorAll(".topic")

// returns button with data-target-modal attached to it //
const btns = document.querySelectorAll("[data-target-modal]");

// returns close span class//
const close_modals = document.querySelectorAll(".close-modal");

// For each button when clicked, open the modal task form //
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
  });
});


// For each close button when clicked, remove the active for the resource list form inorder to close/remove //
close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

// When window is clicked  remove the active element of the resource list form to close //
window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
  }
};


// returns submit button//
const resourceSubmit = document.getElementById("resourceSubmit");


resourceSubmit.addEventListener("click", createResource );

function createResource () {

  // creates new div from document//
    const resourceDiv= document.createElement("div");

    //Returns value of resourceinput id//
    const inputValue = document.getElementById("resourceInput").value;

    //creates a text node  with input value and appends it to the document//
    const text = document.createTextNode(inputValue);
    
    // adds resource elements to taskDiv//
    resourceDiv.appendChild(text);

    // adds resource elements to resourceDiv//
    resourceDiv.classList.add("resource");
    
    //return close element //
    const span = document.createElement("span");

    //creates a text node and appends it to the  resource card//
    const spanText = document.createTextNode("\u00D7");

    // add class "close" to span//
    span.classList.add("close");

    // adds text node to span//
    span.appendChild(spanText);

    // adds span to resourcekDiv//
    resourceDiv.appendChild(span);

    noTopic.appendChild(resourceDiv);

    //when span close button is selected close the resource link card//
    span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
      });

    resourceForm.classList.remove("active");

    document.getElementById('resourceInput').value = ""
    
}

//When submit button is clicked fire creatTask function//
resourceSubmit.addEventListener("click", createResource );

const closeButtons = document.querySelectorAll(".close");


//When close buttons are clicked close/ dont display the task card //
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});
