
import 'air-datepicker';
import moment from 'moment';


export default function() {
 

  const from = $('#from')
  const to = $('#to')
  const fromValue = document.getElementById('from').value
  const toValue = document.getElementById('to').value

  from.datepicker({
    position: "bottom right",
    // startDate: fromValue ? moment(fromValue, 'DD.MM.YYYY').toDate() : new Date()
  })

  if (fromValue) {
    from.data('datepicker').selectDate(moment(fromValue, 'DD.MM.YYYY').toDate())
  }
  
  
  to.datepicker({
    position: "bottom right",
    maxDate: new Date()
  })

  if (toValue) {
    to.data('datepicker').selectDate(moment(toValue, 'DD.MM.YYYY'))
  }

  


  $('.js-birthday-input').datepicker({
    maxDate: new Date()
  })
}