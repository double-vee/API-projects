class Github {
  constructor() {
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );

    const [profile, repos] = await Promise.all([
      profileResponse.json(),
      repoResponse.json(),
    ]);

    return {
      profile,
      repos,
    };
  }
}
