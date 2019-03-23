
import 'air-datepicker';


export default function() {
  $('#from').datepicker({
    position: "bottom right"
  })
  $('#to').datepicker({
    position: "bottom right",
    maxDate: new Date()
  })
}