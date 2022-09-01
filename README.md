# <Work-Scheduler>
<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Description
<details> <summary>Desktop View</summary>

![Desktop-view at 12pm](./assets/Destop%20View%20at%2012pm.png)
</details>

**What?**

This is a pseudo-calender planner for a typical 9 to 5 workday. Users can add their plans into their desired time (9 am to 5 pm) in the textbox next to it, and save it. Their work will not disappear as the save function saves their inputted text into the pc's localstorage in which in will be automatically show upon reopening the webpage. 
However, if the user wishes to erase their saved inputted text, a "clear" button has been added. This "clear" button erases their localstorage data and refreshs the page, resulting in a clean slate. 


**Acquired Knowledge**

Throughout this assignment I have gotten a better understanding of 3rd-party libraries (eg. Bootstrap and JQuery). While I am far from being comfortable with these libraries as shown with my use of vanilla Javascript and having the trouble of making it mobile responsive; they have provided useful and time-saving ways of implementing the desired code. This has made the progress of building this website less cumbersome and more efficient.

Here are some of the functions I learnt:
1. "$(this).parent/siblings()" //Targets the parent or sibling(s) of the targeted element/variable with the "this" element.
2.  "`${i}`" using the `` operator along with ${variable} to add a variable within a string.  
3. Adding fonts/symbols with Google Fonts
4. In Bootstrap, the use of adding classes to implement pre-built css such as row or col for a nice and simple layout. Along with adding display(flex), justify-content, etc. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap
- [x] Html code with Bootstrap for the framework
- [x] Showing the current time with momentjs Format: (dddd, MMMM Do)(Day, Month name, month date)
- [x] Highlight function to show current, past and future hours
- [x] Notification and save function
- [x] Saved data automatically loaded when page is revisted/refreshed.
- [x] Clear button to wipe save data, and text from page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Samuel Wai Weng Yong - <a href="mailto:samuelyongw@gmail.com"> samuelyongw@gmail.com </a>

Project Link: [Work Scheduler](https://github.com/KangaZero/kangazero.scheduler.io.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Here are some of the resources used as reference to build this work scheduler:

* [Choose an Open Source License](https://choosealicense.com)
* [localStorage clear function](https://www.w3schools.com/jsref/met_storage_clear.asp)
* [momentjs docs](https://momentjs.com/docs/#/parsing/now/)
* [setInterval/Timeout](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
* [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [parent function](https://www.w3schools.com/jquery/traversing_parent.asp)
* [Bootstrap grid system](https://getbootstrap.com/docs/4.0/layout/grid/)

In addition to these links, I would like to acknowledge and credit the help I had from a tutor in a one-on-one session. They have helped me in introducing the "`${i}`" function, which results in less overall code, and as well as the "classList.add" function.

Here are their contact details:
- Name: Jain Dixit
- Email: <a href="jdixit@instructors.2u.com"> 
jdixit@instructors.2u.com </a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="center">Thanks for reading 😄!</p>
