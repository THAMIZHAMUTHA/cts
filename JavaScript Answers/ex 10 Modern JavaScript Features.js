const formatEvent = ({ name, date, seats }) =>
  `Event: ${name}, Date: ${date}, Seats: ${seats}`;

const original = [{ name: "Art Fest", date: "2025-06-15", seats: 5 }];
const cloned = [...original];

const defaultEvent = (name = "Untitled", date = "TBD", seats = 0) => ({
  name,
  date,
  seats,
});

console.log(formatEvent(defaultEvent()));
