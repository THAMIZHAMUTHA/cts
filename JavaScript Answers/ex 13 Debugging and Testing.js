document.querySelector("#regForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = {
    name: e.target.elements.name.value,
    email: e.target.elements.email.value,
  };

  console.log("Form Data:", data);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);
});
