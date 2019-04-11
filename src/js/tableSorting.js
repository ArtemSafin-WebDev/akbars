
import './dateTimeMoment'

export default function() {
  $.fn.dataTable.moment('DD.MM.YYYY')

  $.fn.dataTable.moment = function(format, locale) {
    var types = $.fn.dataTable.ext.type

    // Добавляем определение типов времени
    types.detect.unshift(function(d) {
      return moment(d, format, locale, true).isValid() ? 'moment-' + format : null
    })

    // Добавляем метод сортировки
    types.order['moment-' + format + '-pre'] = function(d) {
      return moment(d, format, locale, true).unix()
    }
  }

  $.fn.dataTable.ext.search.push(function(settings, data, dataIndex) {
    var homeMatch = document.querySelector('#home').checked;
    var guestMatch = document.querySelector('#guest').checked;
    
    var currentRowClass = settings.aoData[dataIndex].nTr.className;


   
    if (homeMatch && guestMatch) {
      return true
    } else if (homeMatch && !guestMatch) {
      if (currentRowClass.includes('played-home')) {
        return true
      } else {
        return false
      }
    } else if (!homeMatch && guestMatch) {
      if (currentRowClass.includes('played-guest')) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  })

  $('.js-table-sortable').DataTable({
    paging: false,
    info: false,
    searching: false,
    aaSorting: []
  })

  var calendarTable = $('.js-table-sortable-calendar').DataTable({
    paging: false,
    info: false,
    searching: true,
    dom: 'ltipr',
    aaSorting: [],
    language: {
      zeroRecords: "Нет матчей, соответствующих запросу",
      emptyTable:  "Матчи отсутствуют",
    }
  })

  var homeCheckbox = document.querySelector('#home')
  var guestCheckbox = document.querySelector('#guest')

  if (homeCheckbox) {
    homeCheckbox.addEventListener('change', function() {
     
      calendarTable.draw();
    })
  }

  if (guestCheckbox) {
    guestCheckbox.addEventListener('change', function() {
     
      calendarTable.draw();
    })
  }
}

// const table = document.querySelector('.staff__info-table')
// if (table) {

//   //  Получаем ряды, находящиеся в tBody таблицы

//   const tBody = table.tBodies[0]
//   const tRows = Array.from(tBody.rows)

//   let column = 3;
//   let dateColumn = 3;

//   // Нужно написать дополнительную логику для сортировки дат

//   // Сортируем, сравнивая значение колонки текущего ряда со значением колонки из следующего

//   let tRowsSorted = tRows.sort((a, b) => {
//     let valueRowA = a.cells[column - 1].textContent.trim();
//     let valueRowB = b.cells[column - 1].textContent.trim();
//     if (column === dateColumn) {
//       valueRowA = valueRowA.split('.').reverse().join('');
//       valueRowB = valueRowB.split('.').reverse().join('');
//     }
//     return $.isNumeric(valueRowA) && $.isNumeric(valueRowB) ? valueRowA - valueRowB : valueRowA.toString().localeCompare(valueRowB);
//   })

//   // Перемещаем ряды в новом порядке

//   tRowsSorted.forEach(tr => {
//     tBody.appendChild(tr)
//   })
// }
