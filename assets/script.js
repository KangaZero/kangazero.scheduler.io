
var timeEl = document.querySelectorAll('#time');
var currentTimeEl = $('#currentDay');


//displays current time on page
currentTimeEl.text(moment().format('dddd, MMMM Do'));


// function updatePerHour(){
//     var currentHour = moment().hours();
//     timeEl.forEach(function (){
//         var surroundingHour =
//     })

// }