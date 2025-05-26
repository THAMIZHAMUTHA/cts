const events = [
  { name: "Music Night", date: "2025-07-01", seats: 10 },
  { name: "Old Workshop", date: "2024-01-01", seats: 0 },
];

const today = new Date("2025-05-25");

events.forEach(event => {
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  } else {
    console.log(`Hidden: ${event.name}`);
  }
});

function registerUser(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats left!");
    event.seats--;
    console.log(`User registered for ${event.name}`);
  } catch (err) {
    console.error(err.message);
  }
}
