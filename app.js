const searchUser = document.getElementById("searchUser");
// Init github
const github = new Github();
// Init ui
const ui = new UI();

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        //  Show Profile
        ui.showProfile(data.profile);
      }
    });
  }
});
