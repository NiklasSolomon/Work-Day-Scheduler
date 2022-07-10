// DECLARE current date
var todaysDate = moment().format('MMMM Do YYYY, h:mm A');
// DECLARE current hour
// DECLARE currentDay element
$("#currentDay").html(todaysDate);

// DECLARE timeEntries container element
var containerEl = $(".containerEl");

// Set up a "click" event listener on the container
containerEl.on("click", "button", function(event) {

    // Fetch the hour from the clicked button's (event.target) "data-hour" attribute
    
    // Use the hour to create the key for local storage

    // From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value

    // Use the key and the value to save into local storage

});

// Time blocks are colored based on time of day
function timeColor() {
    var hour = moment().hours();

$(".time-block").each(function() {
    var currentHour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
        $(this).addClass("future");
    } else if (currentHour === hour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("past");
    }
})
};
    // Save an hour to local storage

// Call functions
timeColor();