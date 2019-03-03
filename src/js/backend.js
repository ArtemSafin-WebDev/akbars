function open_new(href) {
  var new_win = window.open()
  new_win.opener = null
  new_win.location = href
  return false
}

// Нам не понадобится, заменен слайдером слик

// $(function() {
//   $('.scrollpane').jScrollPane({
//     verticalDragMinHeight: 70,
//     verticalDragMaxHeight: 70,
//     showArrows: true
//   })
//   $('a.ext-link,area.ext-link').click(function() {
//     open_new($(this).prop('href'))
//     return false
//   })
// })

// Новости больше не подгружаются аяксом

// is_news_loading = false

// function load_news(filter) {
//   if (is_news_loading) return false
//   is_news_loading = true
//   $.ajax({
//     type: 'POST',
//     dataType: 'json',
//     url: '/news/load.php',
//     data: { filter: filter, from: max_news_date[filter] },
//     success: function(data) {
//       $('#news-list-' + filter).append(data['news'])
//       max_news_date[filter] = data['time']
//       $('#news-list-' + filter)
//         .closest('.scrollpane')
//         .jScrollPane({
//           verticalDragMinHeight: 70,
//           verticalDragMaxHeight: 70,
//           showArrows: true
//         })
//       is_news_loading = false
//     },
//     error: function() {
//       is_news_loading = false
//     }
//   })
//   return false
// }
var calendar_month = 3
var calendar_year = 2019
var calendar_curr_year = calendar_year
var calendar_team = 1
var calendar_min_month = 7
var calendar_min_year = 2013
var calendar_max_month = 3
var calendar_max_year = 2019
var monthNames = [
  'январь',
  'февраль',
  'март',
  'апрель',
  'май',
  'июнь',
  'июль',
  'август',
  'сентябрь',
  'октябрь',
  'ноябрь',
  'декабрь'
]

function calendar_move(dir) {
  var next_year = calendar_year
  if (dir == 1) {
    var next_month = calendar_month + 1
    if (next_month > 12) {
      next_month = 1
      next_year++
    }
    $is_ok = next_year < calendar_max_year || (next_year == calendar_max_year && next_month <= calendar_max_month)
  } else {
    var next_month = calendar_month - 1
    if (next_month < 1) {
      next_month = 12
      next_year--
    }
    $is_ok = next_year > calendar_min_year || (next_year == calendar_min_year && next_month >= calendar_min_month)
  }
  if ($is_ok) {
    $.ajax({
      type: 'POST',
      url: '/calendar/loadtable.php',
      data: { month: next_month, year: next_year, team: calendar_team },
      success: function(data) {
        $('.calendar table.datepicker-calendar').replaceWith(data)
        calendar_year = next_year
        calendar_month = next_month
        $('.calendar div.datepicker-title span').text(
          monthNames[calendar_month - 1] + (calendar_year != calendar_curr_year ? ' ' + calendar_year : '')
        )
        set_game_tips()
        return false
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert('Ошибка связи с сервером!')
        return false
      }
    })
  }
  return false
}
