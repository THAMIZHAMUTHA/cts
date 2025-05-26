// Promise version
fetch("/mock-api/events.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error fetching:", err));

// Async/Await version
async function loadEvents() {
  document.getElementById("spinner").style.display = "block";
  try {
    const res = await fetch("/mock-api/events.json");
    const data = await res.json();
    console.log(data);
  } finally {
    document.getElementById("spinner").style.display = "none";
  }
}
loadEvents();
