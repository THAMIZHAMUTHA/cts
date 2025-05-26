function registerUser(data) {
  document.querySelector("#status").textContent = "Submitting...";

  setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    })
      .then(res => res.json())
      .then(res => {
        document.querySelector("#status").textContent = "Success!";
        console.log(res);
      })
      .catch(() => {
        document.querySelector("#status").textContent = "Failed to submit!";
      });
  }, 1000);
}
