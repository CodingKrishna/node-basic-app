var _ = require('lodash');
var obj = {
    "self": "https://10.78.92.131/adminapi/calendar/77",
    "calId": "77",
    "name": "TTTT",
    "timeZone": "Asia/Kolkata",
    "description": [],
    "calendarType": "FLEXIBLEHOURS",
    "businessDays": [
       {
          "dayOfWeek": "MON",
          "intervals": {
             "interval": {
                "name": "Time Range 1",
                "startTime": "01:00",
                "endTime": "12:00"
             }
          }
       },
       {
          "dayOfWeek": "TUE",
          "intervals": {
             "interval": {
                "name": "Time Range 1",
                "startTime": "01:00",
                "endTime": "12:00"
             }
          }
       },
       {
          "dayOfWeek": "WED",
          "intervals": {
             "interval": {
                "name": "Time Range 1",
                "startTime": "01:00",
                "endTime": "12:00"
             }
          }
       },
       {
          "dayOfWeek": "THU",
          "intervals": {
             "interval": {
                "name": "Time Range 1",
                "startTime": "01:00",
                "endTime": "12:00"
             }
          }
       },
       {
          "dayOfWeek": "FRI",
          "intervals": {
             "interval": {
                "name": "Time Range 1",
                "startTime": "01:00",
                "endTime": "12:00"
             }
          }
       }
    ],
    "specialDays": {
       "specialDay": {
          "name": "TTTT",
          "date": "2018-07-10",
          "intervals": {
             "interval": {
                "name": "Time Range 1",
                "startTime": "01:00",
                "endTime": "12:00"
             }
          }
       }
    }
 }

 let intervals = [];
 let weekDays = []
 obj.businessDays.map((bday) => {
    weekDays.push(bday.dayOfWeek);
     if(Array.isArray(bday.intervals)) {
        bday.intervals.map((inte)=> {
            intervals.push(inte);
        })
     } else {
        intervals.push(bday.intervals.interval);
     }
 });
 console.log('[HK] intervals> ', intervals);
 let unic = _.uniqBy(intervals, 'startTime', 'endTime');
 let isUnicIntervals = unic.length === 1;
 return {isUnicIntervals: isUnicIntervals, weekDays: weekDays, interval: unic[0]};
 console.log('unic>>', unic);
 console.log('weekDay>>', weekDay);
