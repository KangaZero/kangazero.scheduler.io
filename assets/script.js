
var timeEl = document.querySelectorAll('#time');
var currentTimeEl = $('#currentDay');
var refreshBtnEl = $('#refreshBtn');

//displays current time on page
currentTimeEl.text(moment().format('dddd, MMMM Do'));

//Activity 3 Week 5 //refreshes page to clear text
refreshBtnEl.on('click', function () {
    location.reload();
  });

//Activity 3 Week 5 //Dark-light mode toogle switch //Edit this!
  themeButtonEl.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
      isDark = !isDark;
    } else {
      $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
      isDark = !isDark;
    }
  });
  
  