export default {
  onChange({context}, e, id, dateString) {
    if (dateString) {
      formatteddata = {due: formattedMoment(moment(dateString)), workflow: "/tw-ui/7.calendar" }

      Meteor.call('taskspending.update', formatteddata, id, (err) => {
        if (err) {
          sweetAlert("Oops...", err.message, "error")
          return // LocalState.set('SAVING_ERROR', err.message);
        }
      });

      console.log("data", dateString)
      console.log("id", id)
      console.log("formatteddata", formatteddata)
    }
  },
  toggleCalendar({context, Meteor, LocalState}, e, id) {
    var arr = LocalState.get('SHOWING_CALENDAR') ? LocalState.get('SHOWING_CALENDAR').split(',') : null
    console.log("arr", arr)
    if (!arr) {
      console.log("there is no arr")
      console.log("id", id)
      return LocalState.set('SHOWING_CALENDAR', id)
    } else if (arr.indexOf(id) < 0) {
      arr.push(id)
      var str = arr.join()
      return LocalState.set('SHOWING_CALENDAR', str);
    }
    else {
      console.log(arr)
      arr.pop(id)
      var str = arr.join()
      return LocalState.set('SHOWING_CALENDAR', str);
    }
  },
  states() {
    return { st1: 'SHOWING_CALENDAR',
           }
  },
}

