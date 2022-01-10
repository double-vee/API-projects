class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.clearAlert();
    this.profile.innerHTML = `
      <div class="card card-body text-white bg-dark mt-3 mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid w-100 mb-3" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block w-100 mb-4">View the profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary mb-3">Public repos: ${user.public_repos}</span>
            <span class="badge bg-secondary mb-3">Public gists: ${user.public_gists}</span>
            <span class="badge bg-success mb-3">Followers: ${user.followers}</span>
            <span class="badge bg-info mb-3">Following: ${user.following}</span>
            <ul class="list-group">
              <li class="list-group-item bg-dark">Company: ${user.company}</li>
              <li class="list-group-item bg-dark">Website/Blog: ${user.blog}</li>
              <li class="list-group-item bg-dark">Location: ${user.location}</li>
              <li class="list-group-item bg-dark">Member since: ${user.created_at}</li>
              <li class="list-group-item bg-dark">Last update: ${user.updated_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-4">Latest repos</h3>
      <div id="repos"></div>
    `;
  }

  showAlert(message, className) {
    this.clearAlert();
    this.clearProfile();
    const alert = document.createElement("div");
    alert.className = className;
    alert.innerText = message;
    const container = document.querySelector(".searchContainer");
    container.prepend(alert);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
