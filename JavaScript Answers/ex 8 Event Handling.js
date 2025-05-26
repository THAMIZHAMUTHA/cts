document.querySelectorAll(".registerBtn").forEach(btn => {
  btn.onclick = () => alert("You clicked register!");
});

document.querySelector("#categoryFilter").onchange = (e) => {
  console.log(`Filtering by: ${e.target.value}`);
};

document.querySelector("#searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") console.log(`Search: ${e.target.value}`);
});
