function Time() { 
var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth() + 1; 
var year = currentDate.getFullYear();
var hour = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
return <p>The current date is {date + "/" + month + "/" + year} and the current time is {hour + ":" + minutes + ":" + seconds}</p>
// console.log("Current Date: " + date + "/" + month + "/" + year);
// console.log("Current Time: " + hour + ":" + minutes + ":" + seconds);

}
export default  Time;