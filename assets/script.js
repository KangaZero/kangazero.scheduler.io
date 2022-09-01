
var timeEl = document.querySelectorAll('#time');
var currentTimeEl = $('#currentDay');
var refreshBtnEl = $('#refreshBtn');
var themeBtnEl = $('.switch');
var timeBlockEl = $('.time-block');
//target class not id if more than one exist
var saveBtnEl = $('.saveBtn');
var textareaEl = document.querySelectorAll('#description');
var notificationEl = $('.notification');
//displays current time on page
currentTimeEl.text(moment().format('dddd, MMMM Do'));

//Activity 3 Week 5 //refreshes page to clear text and localStorage
refreshBtnEl.on('click', function () {
    localStorage.clear();
    location.reload();
  });

//save function
$(document).ready(function(){

saveBtnEl.on('click',function(){
     //to target within its own block
     var time = $(this).parent('.time-block').attr('id');
     var description = $(this).siblings('.description').val();

    var save = localStorage.setItem(time, description);

     //notification 
     notificationEl.text("Text saved for " + moment(time, "HH").format("hh A"));
 
     //notification auto disappears after 10 seconds
     setTimeout(function(){
        notificationEl.text(" ");
     }, 10000)
    })
     
    });
    
//load function //tutor recommendation
function load (){  //i < 18
    for (var i = 9; i <= 17; i++){
 
        var task = localStorage.getItem(i);
        if (task){
            $(`#${i} .description`).text(task)
        } 
        // original method, would need to manually add all elements
        //    $("#9 .description").text(localStorage.getItem(timeBlockEl[0].id));
    } 
}

//highlights current, past, and future hours with their own colors.
function highlightHour (){

  var timeNow = moment().hours();

    for (var i = 0; i < timeBlockEl.length; i++){
        var hourIndicator = timeBlockEl[i].id
        if (hourIndicator == timeNow){
            //tutor recomendation 
            timeEl[i].classList.add('present')
        //original method    
        //    timeEl[i].setAttribute('class','present col-12 col-md-6 col-lg-2 hour')
        } else if (hourIndicator < timeNow){
            timeEl[i].classList.add('past')  
           // timeEl[i].setAttribute('class','past col-12 col-md-6 col-lg-2 hour')
        } else {
            timeEl[i].classList.add('future')      
           // timeEl[i].setAttribute('class','future col-12 col-md-6 col-lg-2 hour')
        }
    };
    }
 
 //Check current time every minute
 setInterval(highlightHour, 60000);  

highlightHour();
load();

