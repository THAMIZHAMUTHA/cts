document.querySelector("#regForm").addEventListener("submit", e => {
  e.preventDefault();

  const { name, email, event } = e.target.elements;

  if (!name.value || !email.value) {
    document.querySelector("#error").textContent = "All fields are required!";
    return;
  }

  console.log(`Registered ${name.value} for ${event.value}`);
});
