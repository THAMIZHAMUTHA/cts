const eventContainer = document.querySelector("#events");

function renderEventCard(event) {
  const card = document.createElement("div");
  card.textContent = `${event.title} - ${event.date}`;
  card.classList.add("event-card");
  eventContainer.appendChild(card);
}

const sampleEvents = [{ title: "Book Club", date: "2025-06-10" }];
sampleEvents.forEach(renderEventCard);
