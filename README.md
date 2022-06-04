# studbud

# Introduction
My Web App Studbud is designed to help students who are learning a language become more proffiecient in their language learning process by utilising the various features in the website to help them with their issues of motivation, organisation, and consistnecy. 

Throughout my website I chose to maintain a minimalistic aesthetic in order to psychologically all my users to not get distracted or feel overwhelmed when they input a large abount of content or tasks that they need to complete, by making it look neat and alternavely  make the bountiful of task not look like there is alot. Alongside my minimalistic aesthetic decision, i chose to implement the primary colours as accents across the website as they are associated with representing harmony and interdependence between the body mind and emotion. And so, I want my users to align those three elements into a harmonious state aswell when utilising the web app in their study sessions. In addition attract their eye as theyr're vibrant colours.

I also chose to apply the font "poppins" as the principal font-style, as it's use of geometric lines and rounded curves within its type face, allows for an easy reading experience with a  a modern and formal yet friendly and approachable nature. This was to suit my targeted audience.




# Kandban Board Page

The Kanban Board Page of my website is styled quiet differently to my original mockup. For starters, initially i wanted my user to be able to be able to add in different columns, name them different things, and overall and more customisabel elements, however I found having a set number of kanban columns for my user group would work better, as in terms of the web design it won't begin to look disordered when many numbers of columns were starting to be added. In addition, it provided my user group with the set columns they needed to keep track of all their tasks, and the stage of progress they are in with each.


## challenges
The main challenges I faced within coding my kanban Board, was making the my modal task form input other components such as the task due date, and estimated time of completion,which carried over to a part of my resource list. I was able to create the html inputs however I struggled in the javascript section, when i wanted the value of the inputs added to my task or resource lists as did my task title input values would show up.

for example for my resource list:

```Html
<!-- Modal Resourc Form Main Body Container-->
      <div class="body">

       <!-- Resource Title Input to submit into task card -->
       <label for="resourceInput">Title</label>
        <input type="text" id="resourceInput">
      
       <!-- Resource Url Input to submit into task card -->
        <label for="resourceInput"> Url</label>
        <input type="url"id="resourceInput" >
      
       <!-- Submit Input to input all above fields into task card -->
       <input type="submit" value= "Add Task" id="resourceSubmit">

      </div>
```


```Js
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
}
}
```

# Resource List Page

My resource list is almost similar to my mockup as I was able to create tabs for the main different topic sections of "vocabulary", "Grammar", and "reading" language learning students often use. The main goal was to have users be able to input link cards within their associated topic section, so that all their material is sorted, as my target audience mentioned a pain point being having to many resources and not knowing where to locate it when they needed it again.

Initially i was able to get the add a new resource link button to work and keep creating new link buttons, however once I made my resource content tabs able to be shown or hidden, that functionality stopped working, and i wasn't sure where the error is.

I also want to add a button similar to the add new link button, that would create another topic tab for user to sort the material. I ended up running out of time, however i belive it would have been made in a similar fashion, on difference being in javascript i would be creating a function that creates:

1. a new div and class container
2. a new buttton along with an attribute of  onclick="openTab(event, 'topic')
3. a replica of the resource content element, mainly with the add new link button.


# Timer Page 
My timer page was exactly like my mockup except for the component in my pomodoro timer. However the main difference was I chose not to make the session and break times editable as upon further research, 25 minutes was regarded as a length of time not regarded as too short or long, but had a psychological effect to create a sense of urgency within they working user which made them focus alot more than in a longer or shorter session. In addition, was associated as an effficient session time for people who struggled with procrastion, which is what alot of my target user struggled with, especially if they were in the more mature stages of their language learning phase, where they experience less interest or inquisitiveness and a bit of a dulled passion. 

# Music Player
For my music player, originally in my mockup i had it placed as a expandable widget at the top with my header. However, I later discorverd its positioning would be better placed in the aside section underneath my sidbar navigation tabs, as then especially in a phone it wouldn't over shadow any of my elements in my different pages. In addition, as it's in the aside, it would not pose as a distraction. 

A challenge within making my music player was getting my music source url's to work especially when i either downloaded them, added them to a public google drive, or used the webs download url, so i utilised Thelle Codes. music source url's whom i referenced, which somehow only worked.

## Overall challenges
The main challenge I faced in my web development process was all the elements responsive. 
Even though I had made a mockup of what i entailed my website to look like and how the elements would be ordered in a smaller device, I think my main mistake was inserting my elements with fixed values, so when it was time to change them to become relative to the device size, it brought alot of organisational difficulties as i tried exchanged different measurements with vh and vw elments, min/max height and width, aswell as things like flex-wrap. I suggest maybe the problem was also because I thought of designing from a large device and shrink everything for a small device, so maybe in future designing for a smaller device first might prove easier as i'd only need to make my element bigger.

# References
Ashiqur Rahman Pranto. (2022). Stopwatch using HTML, CSS and JavaScript | JavaScript Project [Video]. Retrieved from https://youtu.be/TZaVhmoMHek.
Basir Payenda. (2020). To Do App Using HTML, CSS and JavaScript (Drag & Drop)|Project #10/100 [Video]. Retrieved from https://youtu.be/m3StLl-H4CY.
COLOUR PSYCHOLOGY: THE FOUR PRIMARY COLOURS - passion for fresh ideas. passion for fresh ideas. (2013). Retrieved from https://passionforfreshideas.com/personalgrowth/colour-psychology-primary-colours/#:~:text=In%20colour%20psychology%2C%20red%2C%20yellow,between%20these%20three%20elements%2C%20respectively.
Create a Music Player using JavaScript - GeeksforGeeks. GeeksforGeeks. (2022). Retrieved from https://www.geeksforgeeks.org/create-a-music-player-using-javascript/.
Creating a Kanban Board with HTML, CSS & JavaScript. Karthik Dev Articles. (2021). Retrieved from https://karthikdevarticles.com/creating-a-kanban-board-with-html-css-and-javascript.
HMA WebDesign. (2021). How to Build Vertical Tabs in HTML and CSS | Animated Vertical Tabs in HTML and JavaScript [Video]. Retrieved from https://youtu.be/4fzLRXUbkcM.
learn-webdev. (2020). Pomodoro Timer | Javascript Beginner Project Tutorial [Video]. Retrieved from https://youtu.be/vAEG6OVCass.
Thelle Codes. (2022). Create A Music Player Using HTML CSS & Vanilla JavaScript [Video]. Retrieved from https://youtu.be/bxbidND_jrQ.
Why is a Pomodoro 25 minutes? | Productivity Timer. Productivitytimer.com. Retrieved from https://productivitytimer.com/why-25-minutes.php.

All Icons, Images, Audio:
Images.unsplash.com. Retrieved 4 June 2022, from https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg.
fontawesome. Icons [Image]. Retrieved from https://fontawesome.com/icons.
Thelle Codes. (2022). Create A Music Player Using HTML CSS & Vanilla JavaScript [Video]. Retrieved from https://youtu.be/bxbidND_jrQ.