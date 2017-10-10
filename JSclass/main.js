$(document).ready(function(){ 

var weatherNames = ["warmly sunny", "crazily windy", "frozen cold", "dramatically rainy", "big bang", "magic fireball"];
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var breakfastNames = ["Coffee and bread", "strawberry sandwich and banana milkshake", "vegetable Udon and Tempura", "hotdog and soda", "Red bean bun and soya-bean milk", "electric component and wires"];
var courseNames = ["Javascript class","Major Studio", "CC Lab", "Design For This Centery lecture", "Algorave class", "Motion graphic class", "OpenFrame Work class", "Unity class", "work", "Black Friday shopping"];
var eventNames = ["Halloween event", "music festival", "Broadway concert", "MoMA exhibition"];
var timeNames = ["midnight", "1:00AM", "2:00AM", "3:00AM", "4:00AM", "11:32PM", "2 hours before your work"];
var locationNames = ["New York Health & Racquet Club", "Chinatown", "Greenpoint", "Time Square", "Central Park", "Williamsburg"];
var colorNames = ["black", "red", "green", "blue", "hotpink", "blueviolet", "coral", "gold", "limegreen", "orange", "orangered", "purple", "salmon", "slateblue", "yellowgreen"];

//var weatherChange = weatherNames[Math.random()];
var weatherChange = Math.floor(Math.random() * weatherNames.length);
var weatherElement = weatherNames[weatherChange];

var dayChange = Math.floor(Math.random() * dayNames.length);
var dayElement = dayNames[dayChange];

var breakfastChange = Math.floor(Math.random() * breakfastNames.length);
var breakfastElement = breakfastNames[breakfastChange];

var courseChange = Math.floor(Math.random() * courseNames.length);
var courseElement = courseNames[courseChange];

var eventChange = Math.floor(Math.random() *  eventNames.length);
var eventElement = eventNames[eventChange];

var timeChange = Math.floor(Math.random() *  timeNames.length);
var timeElement = timeNames[timeChange];

var locationChange = Math.floor(Math.random() *  locationNames.length);
var locationElement = locationNames[locationChange];

var colorChange = Math.floor(Math.random() * colorNames.length);
var colorElement = colorNames[colorChange];

// var weather = choice(weatherNames);
// var day = choice(dayNames);
// var breakfast = choice(breakfastNames);

$('h3').find('.weather').text(weatherElement);
$('h3').find('.day').text(dayElement);
$('h3').find('.breakfast').text(breakfastElement);
$('h3').find('.course').text(courseElement);
$('h3').find('.event').text(eventElement);
$('h3').find('.time').text(timeElement);
$('h3').find('.location').text(locationElement);

$('h1').css('color', 'tomato');
$('h3').css('color', colorElement);
$('p').css('color', 'blue');

//change background color each time
//change text color each time
//$('#tour').on('click', 'button', function() {
    //$('.photos').slideDown();
     // $('.photos').slideToggle();
    
});
