'use strict';

/* global schedule, warnings, stickies, quotes */

$(function() {
  schedule.forEach(function(day) {
    var $program = $('#program'),
        $h1 = $('<h1>', {text: day.name});
    $program.append($h1);

    var $table = $('<table>');
    day.entries.forEach(function(entry) {
      var $row = $('<tr>').append($('<td>', {text: entry.time, class: 'time'}))
                          .append($('<td>', {text: entry.name, class: 'name'}));
      $table.append($row);
    });

    $program.append($table);
  });

  function getWarning(warning) {
    return warning.day + ', ' + warning.time + ' - ' + warning.message;
  }

  if (warnings) {
    var $warning = $('#warnings');
    var last5 = warnings.slice(0, 5);
    last5.forEach(function(warning) {
      $warning.append($('<li>').append($('<p>', {html: getWarning(warning)})));
    });
  }

  var index = parseInt(Math.random()*100) % quotes.length;
  $('#quote').append($('<p>', {text:quotes[index]}));

  if (stickies) {
    var $sticky = $('#sticky');
    stickies.forEach(function(sticky) {
      $sticky.append($('<li>').append($('<p>', {html: sticky})));
    });
  }
});
