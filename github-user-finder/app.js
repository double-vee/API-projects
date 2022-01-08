const github = new Github();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const input = e.target.value.trim();
  if (input !== "") {
    github
      .getUser(input)
      .then((data) => {
        if (data.profile.message === "Not Found") {
        } else {
          console.log(data.profile);
        }
      })
      .catch(console.log);
  }
});
