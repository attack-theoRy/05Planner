

// Global variables
var currTime = moment().format('dddd, MMMM Do YYYY');


// debug moment objects
console.log(currTime)

// debug check
console.log("current Hour")
console.log(currHour)


// get the current hour, used to compare 
var currHour = parseInt(moment().format('HH'));

// test breakpoint
console.log('check here')


// global array of savedEvent objects to save and retrieve from localStorage
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



 // Display the time using moment.js
$('#currentDay').append(currTime);

// call when first loading
eventColors();

// Color coding to reflect whether the time slot is in the past, the present or the future 
function eventColors() {


  // run through each hour 9am - 5pm (using 24hr time)
    for (var i = 9; i <= 17 ; i++) { 
     
   // add class for present
      if(i == currHour)
      {
          $('#event'+i).addClass('present')
      }
      // color code the past block using past class
      else if(i < currHour)
      {
          $('#event'+i).addClass('past')
      }
      // color the future blocks with the future class
      else{
          $('#event'+i).addClass('future')
      }

  }
 
}

// load events from localStorage
loadEvents()

// load the saved events
function loadEvents()
{

  // get the array of objects from storage and parse
  savedEvent = JSON.parse(localStorage.getItem('savedEvent'))

  // cycle through all the textarea elements and setting the text of the localStorage object
  for (var i = 0; i < 9; i++)
  {
    // set the textarea to the saved strings
    var eventID = i+9
    $('#event' + eventID).text(savedEvent[i].strEvent)
  }

}




// short non-working attempt to consolidate into single listener

// $('#saveBtn').click(function() {

 // var selection = event.target

  //selection.getItem()

  

  
//})


// Saving the events with button presses
// I feel like there must be a way to consolidate these into a single listener, but
// didn't have time to try so is currently just hardcoded

$('#btn9').click(function() {
 
  // set object to value of textarea box
 savedEvent[0].strEvent = $('#event9').val()

 // set the localStorage object with the current savedEvent object
 localStorage.setItem("savedEvent", JSON.stringify(savedEvent))

});

// all the way down the same function for each button
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


