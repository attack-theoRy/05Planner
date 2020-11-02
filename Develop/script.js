

// Global variables

var currTime = moment().format('dddd, MMMM Do YYYY');
var currHour = moment().format('h');

console.log(currTime)

console.log("current Hour")
console.log(currHour)

var currHour = parseInt(moment().format('HH'));

// test breakpoint
console.log('check here')

// debug check
console.log(currHour)


// global array of savedEvent objects
var savedEvent = [   {
  hour : 9,
  strEvent : ''
},
{
hour : 10,
strEvent: ''
},
{
hour : 11,
strEvent: ''
},
{
hour : 12,
strEvent: ''
},
{
hour : 13,
strEvent: ''
},
{
hour : 14,
strEvent: ''
},
{
hour : 15,
strEvent: ''
},
{
hour : 16,
strEvent: ''
},
{
hour : 17,
strEvent: ''
}
 ]

// Saving the events with button presses
// I feel like there must be a way to consolidate, but
// didn't have time to try 

$('#btn9').click(function() {
 
 savedEvent[0].strEvent = $('#event9').val()

 localStorage.setItem("savedEvent", JSON.stringify(savedEvent))

});

$('#btn10').click(function() {

  savedEvent[1].strEvent = $('#event10').val()

 localStorage.setItem("savedEvent", JSON.stringify(savedEvent))
});

$('#btn11').click(function() {
  savedEvent[2].strEvent = $('#event11').val()

 localStorage.setItem("savedEvent", JSON.stringify(savedEvent))
})

$('#btn12').click(function() {

  savedEvent[3].strEvent = $('#event12').val()

  localStorage.setItem("savedEvent", JSON.stringify(savedEvent))
 });

$('#btn13').click(function() {
  savedEvent[4].strEvent = $('#event13').val()

  localStorage.setItem("savedEvent", JSON.stringify(savedEvent))
 });

$('#btn14').click(function() {
  savedEvent[5].strEvent = $('#event14').val()

  localStorage.setItem("savedEvent", JSON.stringify(savedEvent))
 });

$('#btn15').click(function() {
  savedEvent[6].strEvent = $('#event15').val()

  localStorage.setItem("savedEvent", JSON.stringify(savedEvent))
 });

$('#btn16').click(function() {
  savedEvent[7].strEvent = $('#event16').val()

  localStorage.setItem("savedEvent", JSON.stringify(savedEvent))
 });

 $('#btn17').click(function() {
  savedEvent[8].strEvent = $('#event17').val()

  localStorage.setItem("savedEvent", JSON.stringify(savedEvent))
 });


// Display the time using moment.js

 $('#currentDay').append(currTime);

// Color coding to reflect whether the time slot is in the past, the present or the future 
eventColors();

function eventColors() {


 // if((currHour >= 9) && (currHour <= 17)) {

    for (var i = 9; i <= 17 ; i++) { 
     
   // add class for present
      if(i == currHour)
      {
          $('#event'+i).addClass('present')
      }
      // color code the past block using past class
      else if(i < hourNow24 - 5)
      {
          $('#event'+i).addClass('past')
      }
      // color the future blocks with the future class
      else{
          $('#event'+i).addClass('future')
      }
      
  //  }

  }
 
}

loadEvents()

// load the saved events
function loadEvents()
{

  // get the object from storage
  savedEvent = JSON.parse(localStorage.getItem('savedEvent'))

 // savedEvent = loadedEvent;

  // cycle through all the textarea elements and setting the text of the localStorage object
  for (var i = 0; i < 9; i++)
  {
    var eventID = i+9
    $('#event' + eventID).text(savedEvent[i].strEvent)
  }

}