/*function filterButtons() {
  const countries = Array.z (new Set(users.map((user) => user.nat)));
  const filterButtons = document.getElementById("filter-buttons");

  countries.forEach((country) => {
    const btn = document.createElement("button");
    btn.classList.add("filter-btn");
    btn.textContent = `Filter by ${country}`;
    btn.addEventListener("click", () => UsersByCountry(country));
    filterButtons.appendChild(btn);
  });
}

function UsersByCountry(country) {
  const filteredUsers = users.filter((user) => user.nat === country);
  displayFilteredUsers(filteredUsers);
}

function displayFilteredUsers(filteredUsers) {
  const filteredUsersContainer = document.getElementById("filtered-users");
  filteredUsersContainer.innerHTML = "";

  filteredUsers.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.textContent = `Nationality: ${user.nat}, Name: ${user.name.first} ${user.name.last}, Email: ${user.email}`;
    filteredUsersContainer.appendChild(userDiv);
  });
}
filterButtons()
;
*/
/*const females = users.filter((user) =>
  user.name.title.toLowerCase().includes("miss")
);
const males = users.filter((user) =>
  user.name.title.toLowerCase().includes("mr")
);

console.log("Miss:", females);
console.log("Mr:", males);*/
/*function extractEmails(users) {
  return users.map((user) => user.email);
}
console.log(extractEmails, users);*/
/*function changeEmailsToEvilCorp(users) {
  for (let user of users) {
    const firstName = user.name.first;
    const lastName = user.name.last;
    user.email = `${lastName}.${firstName}@evilcorp.com`;
  }
}
changeEmailsToEvilCorp(users);
console.log(users);*/
