var calender = new Date();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "TuesDay",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
var month = months[calender.getMonth()];
var date = (document.getElementById("date").innerHTML = calender.getDate()<10 ? "0" + calender.getDate(): calender.getDate() );
var day = (document.getElementById("day").innerHTML = days[calender.getDay()]);
var month = (document.getElementById("month").innerHTML = month);
var year = (document.getElementById("year").innerHTML = calender.getFullYear());