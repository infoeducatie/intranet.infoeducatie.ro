schedule.forEach(function (day){
  var $program = $('#program')
  var $h2 = $('<h2>', {text: day.name})
  $program.append($h2)

  var $table = $('<table>')

  day.entries.forEach(function (entry) {
    var $row = $('<tr>')
      .append($('<td>', {text: entry.time, class: 'time'}))
      .append($('<td>', {text: entry.name, class: 'name'}))
    $table.append($row)
  })
  $program.append($table)
})

var getWarning = function(warning) {
  return warning.day + ", " + warning.time + " - " + warning.message
}

if (warnings) {
  var $warning = $('#warnings')
  last5 = warnings.slice(0, 5)
  last5.forEach(function(warning){
    $warning.append($('<li>')
                    .append($('<p>', {html: getWarning(warning)})))
  })
}

var index = parseInt(Math.random()*100) % quotes.length
$('#quote').append($('<p>', {text:quotes[index]}))

if (stickies) {
  var $sticky = $('#sticky')
  stickies.forEach(function(sticky) {
    $sticky.append($('<li>')
                    .append($('<p>', {html: sticky})))
  })
}

/* TODOs:

* add Fb list w/ jury
* add Google+ widget w/ smth
* cauta citat limbaje procedurale Dijkstra
* yml to json
* table cu randuri alternative cu background

*/
