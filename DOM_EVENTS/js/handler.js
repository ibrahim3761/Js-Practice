document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    const title = document.getElementById("title-text");
    title.innerText = "Title Updated";
  });

document.getElementById("btn-log-in").addEventListener("click", function () {
  const user = document.getElementById("user-count");
  user.innerText = "User logged in successfully";
});

// set event listener
document.getElementById("btn-update").addEventListener("click", function () {
  let name = document.getElementById("input-name").value;
  document.getElementById("name").innerText = name;
});
