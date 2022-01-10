class Github {
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const profileData = await profileResponse.json();
    return {
      profile: profileData,
    };
  }
}
