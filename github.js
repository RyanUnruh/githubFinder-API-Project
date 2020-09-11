class Github {
  constructor() {
    this.client_id = "f28f1f0c025452d9f674";
    this.client_secret = "5c4e511f0e002c347c38849bc8994f54b9c321c9";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
