
var timeEl = document.querySelectorAll('#time');
var currentTimeEl = $('#currentDay');
var refreshBtnEl = $('#refreshBtn');
var themeBtnEl = $('.switch');


//displays current time on page
currentTimeEl.text(moment().format('dddd, MMMM Do'));

//Activity 3 Week 5 //refreshes page to clear text
refreshBtnEl.on('click', function () {
    location.reload();
  });

//test 
function highlightHour (){
    var timeNow = moment().hours();

    timeEl.forEach(function(){
        var hourIndicator = parseInt(timeEl.attr('id').split('-')[1]);

        if (hourIndicator == timeNow){
            timeEl.addClass('present');
        } else if (hourIndicator < currentHour){
            timeEl.removeClass('present');
            timeEl.addClass('past');
        } else {
            timeEl.removeClass('present');
            timeEl.removeClass('past');
            timeEl.addClass('future');
        }
    });
}
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


