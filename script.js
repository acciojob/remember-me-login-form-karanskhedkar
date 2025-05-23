//your JS code here. If required.
const handleLogin = (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("checkbox").checked;
  if (username && password) {
    alert(`Logged in as ${username}`);
    if (remember) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      const existing = document.getElementById("existing");
      existing.style.display = "none";
    }
  }
};

const handleExisting = (event) => {
  event.preventDefault();
  const lUser = localStorage.getItem("username");
  const lPassword = localStorage.getItem("password");
  console.log(lUser, lPassword);

  if (lUser && lPassword) {
    alert(`Logged in as ${lUser}`);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const lUser = localStorage.getItem("username");
  const lPassword = localStorage.getItem("password");
  if (lUser && lPassword) {
    const existing = document.getElementById("existing");
    existing.style.display = "inline";
  }
});
