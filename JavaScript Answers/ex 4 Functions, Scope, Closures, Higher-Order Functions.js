function addEvent(events, newEvent) {
  events.push(newEvent);
}

function createRegistrationTracker() {
  let count = 0;
  return function register() {
    count++;
    console.log(`Total registrations: ${count}`);
  };
}

const registerYoga = createRegistrationTracker();

function filterEventsByCategory(events, categoryCallback) {
  return events.filter(categoryCallback);
}
