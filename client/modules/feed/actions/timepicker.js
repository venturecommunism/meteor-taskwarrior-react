export default {
  onChange({context}, data, id, dateString) {
    if (dateString) {
      formatteddata = {due: formattedMoment(moment(dateString)) }

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
  toggleCalendar({Meteor, LocalState}) {
    if (!LocalState.get('SHOWING_CALENDAR')) {
      return LocalState.set('SHOWING_CALENDAR', true);
    }
    else {
      return LocalState.set('SHOWING_CALENDAR', null);
    }
  },
  states() {
    return { st1: 'SHOWING_CALENDAR',
           }
  },
}

