function Event(name, category, seats) {
  this.name = name;
  this.category = category;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const event1 = new Event("Coding Bootcamp", "Tech", 15);

console.log(Object.entries(event1)); // [['name', 'Coding Bootcamp'], ...]
console.log(`Available: ${event1.checkAvailability()}`);
