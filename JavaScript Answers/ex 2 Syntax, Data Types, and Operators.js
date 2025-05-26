const eventName = "Community Yoga";
const eventDate = "2025-06-01";
let availableSeats = 30;

console.log(`Event: ${eventName} | Date: ${eventDate} | Seats: ${availableSeats}`);

function register() {
  if (availableSeats > 0) {
    availableSeats--;
    console.log(`Registered! Seats left: ${availableSeats}`);
  } else {
    console.log("Sorry, no seats available.");
  }
}
