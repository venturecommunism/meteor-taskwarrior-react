import React from 'react';

import Container from '../containers/container'

import Data from './1data.jsx'
const DataContainer = Container(Data)

export default CityRow = React.createClass({
  setTime: function(){

    var currentdate = new Date();

    var month = currentdate.getUTCMonth() + 1; //months from 1-12
    month = month + "";
    if( month.length == 1 ){ month = "0" + month; }


    var day = currentdate.getUTCDate();
    var year = currentdate.getUTCFullYear();

    var now = moment()
    var utcoffset = now.format("Z")

    var format = "YYYY-MM-DD HH:mm:ss"
    var formattednow = now.format(format)

    var hours = currentdate.getUTCHours() + parseInt(utcoffset) // + parseInt(this.props.UTCOffset);
      // correct for number over 24, and negatives
      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      // add leading zero, first convert hours to string
      hours = hours + "";
      if( hours.length == 1 ){ hours = "0" + hours; }

      // minutes are the same on every time zone
      var minutes = currentdate.getUTCMinutes();

      // add leading zero, first convert hours to string
      minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes; }

      seconds = currentdate.getUTCSeconds();
      seconds = seconds + ""
      if( seconds.length == 1 ){ seconds = "0" + seconds; }

      this.setState({
        year: year,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        moment: formattednow
      });
  },
  componentWillMount: function(){
    this.setTime();
  },
  componentDidMount: function(){
     window.setInterval(function () {
      this.setTime();
    }.bind(this), 1000);
    var format = "YYYY-MM-DD HH:mm:ss"
    var formattednow = dateFormat(formattedNow(), format)
    this.setState({
      formattednow: formattednow
    })
  },
  render: function() {
    var queryParams = FlowRouter.current().queryParams
    var date = Object.assign({}, this.state)
    var format = "YYYY-MM-DD HH:mm:ss" 
    return (
      <div className="bs-docs-section clearfix">
        <DataContainer {...queryParams} {...date} />
      </div>
    )
  }
});

