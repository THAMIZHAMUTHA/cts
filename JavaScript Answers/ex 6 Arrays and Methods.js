let eventList = [
  { title: "Jazz Concert", type: "Music" },
  { title: "Baking Class", type: "Workshop" },
];

eventList.push({ title: "Rock Show", type: "Music" });

const musicEvents = eventList.filter(e => e.type === "Music");

const cards = eventList.map(e => `Event: ${e.title}`);
console.log(cards);
