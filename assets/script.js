
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

//Activity 3 Week 5 //refreshes page to clear text
refreshBtnEl.on('click', function () {
    location.reload();
  });

//saveButton add save function to local storage

$(document).ready(function(){

saveBtnEl.on('click',function(){
     //to target within its own block
     var time = $(this).parent('.time-block').attr('id');
     var description = $(this).siblings('.description').val();

     localStorage.setItem(time, description);

     //notification 
     $('.notification').text("Text saved for " + moment(time, "HH").format("hh A"));
 
     //notification auto disappears after 10 seconds
     setTimeout(function(){
        $('.notification').text(" ");
     }, 10000)
    })


    });
    

//test 
function highlightHour (){
    var timeNow = moment().hours();

    for (var i = 0; i < timeBlockEl.length; i++){
        var hourIndicator = timeBlockEl[i].id
 // addClass() not working, fix later
        if (hourIndicator == timeNow){
            timeEl[i].setAttribute('class','present col-12 col-md-6 col-lg-2 hour')
        } else if (hourIndicator < timeNow){
           
            timeEl[i].setAttribute('class','past col-12 col-md-6 col-lg-2 hour')
        } else {
            timeEl[i].setAttribute('class','future col-12 col-md-6 col-lg-2 hour')
        }
    };
    }
 
 //Check current time every minute
 setInterval(highlightHour, 60000);  

highlightHour();
//  var isDark = true;
//Activity 3 Week 5 //Dark-light mode toogle switch //Edit this!
  
//   themeBtnEl.on('click', function () {
//     if (isDark) {
//       $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
//       isDark = !isDark;
//     } else {
//       $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
//       isDark = !isDark;
//     }
//   });


