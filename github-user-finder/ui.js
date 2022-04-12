class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.clearAlert();
    this.profile.innerHTML = `
      <div class="card card-body my-3 py-3">
        <div class="row">
          <div class="img-btn-wrap col-md-3">
            <img class="img img-fluid mb-3" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary w-100">View profile</a>
          </div>
          <div class="col-md-9">
            <div class="px-3 d-flex flex-wrap gap-2 mb-3">
              <span class="badge rounded-pill">Public repos: ${user.public_repos}</span>
              <span class="badge rounded-pill">Public gists: ${user.public_gists}</span>
              <span class="badge rounded-pill">Followers: ${user.followers}</span>
              <span class="badge rounded-pill">Following: ${user.following}</span>
            </div>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member since: ${user.created_at}</li>
              <li class="list-group-item">Last update: ${user.updated_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-4">Latest repos</h3>
      <div id="repos" class="mb-4"></div>
    `;
  }

  showRepos(repos) {
    let html = "";

    repos.forEach((repo) => {
      html += `
      <div class="card mb-3 d-flex flex-column">
        <div class="card-header d-flex justify-content-between">
          <a href="${repo.html_url}" target=_blank>${repo.name}</a>
          <div class="mb-1">
            <span class="badge rounded-pill">Stars: ${
              repo.stargazers_count
            }</span>
            <span class="badge rounded-pill">Watchers: ${
              repo.watchers_count
            }</span>
            <span class="badge rounded-pill">Forks: ${repo.forks_count}</span>
          </div>
        </div>
        <div class="card-body">
          <p class="mb-0">${
            !repo.description ? "No description" : repo.description
          }</p>
        </div>
      </div>
      `;
    });

    document.getElementById("repos").innerHTML = html;
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
