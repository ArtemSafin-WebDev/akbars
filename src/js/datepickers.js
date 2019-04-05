
import 'air-datepicker';
import moment from 'moment';


export default function() {
  const fromInputElement = document.getElementById('from')
  const toInputElement = document.getElementById('to')

  if (fromInputElement) {
    const fromValue = fromInputElement.value
    $(fromInputElement).datepicker({
      position: "bottom right",
    })
    if (fromValue) {
      $(fromInputElement).data('datepicker').selectDate(moment(fromValue, 'DD.MM.YYYY').toDate())
    }
  }

  if (toInputElement) {
    const toValue = toInputElement.value
    $(toInputElement).datepicker({
      position: "bottom right",
      maxDate: new Date()
    })
    if (toValue) {
      $(toInputElement).data('datepicker').selectDate(moment(toValue, 'DD.MM.YYYY').toDate())
    }
  }
 
  $('.js-birthday-input').datepicker({
    maxDate: new Date()
  })
}