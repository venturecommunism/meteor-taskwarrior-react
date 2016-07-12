export default {
  onChange({context}, data, id, dateString) {
    formatteddata = {due: formattedMoment(moment(dateString)) }
/*
    Meteor.call('taskspending.update', formatteddata, id, (err) => {
      if (err) {
        sweetAlert("Oops...", err.message, "error")
        return // LocalState.set('SAVING_ERROR', err.message);
      }
    });
*/
    console.log("data", dateString)
    console.log("id", id)
    console.log("formatteddata", formatteddata)
  },
}

