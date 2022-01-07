const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const input = e.target.value.trim();
  if (input !== "") {
    console.log(input);
  }
});
