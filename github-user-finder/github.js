class Github {
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    if (!profileResponse.ok) {
      throw Error(
        `Something went wrong: ${profileResponse.status} ${profileResponse.statusText}`
      );
    }
    const profileData = await profileResponse.json();
    return {
      profile: profileData,
    };
  }
}
