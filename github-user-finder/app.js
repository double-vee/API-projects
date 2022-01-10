const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const input = e.target.value.trim();
  if (input !== "") {
    github.getUser(input).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
      }
    });
  } else {
    ui.clearProfile();
  }
});
