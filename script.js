$(document).ready(function () {
// DECLARE current date
// DECLARE current hour
var todaysDate = moment().format('MMMM Do YYYY, h:mm A');
// DECLARE currentDay element
$("#currentDay").html(todaysDate);

// DECLARE HTML element
var saveBtn = $(".saveBtn");

// Set up a "click" event listener on the container
saveBtn.on("click", function() {
    // Save an hour to local storage
    // console.log(this);
    // Fetch the hour from the clicked button's (event.target) "data-hour" attribute
    // Use the hour to create the key for local storage
    var time = $(this).parent.attr("id").text();
    var event = $(this).siblings(".description").val();
    
    // Use the key and the value to save into local storage
    localStorage.setItem(time, event);
});

function saveEvent() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentEvent = localStorage.getItem(currentHour);

        if(currentEvent !== null) {
            $(this).siblings(".event").val(currentEvent);
        }
    });
};

// Time blocks are colored based on time of day
function timeColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour < hour) {
            $(this).addClass("past");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    }) 
};

// Call functions
saveEvent();
timeColor();
})