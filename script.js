const inputNama = document.getElementById("name");
const inputEmail = document.getElementById("email");
const btn = document.querySelector("#btn-save");

let users = [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = {
    nama: inputNama.value,
    email: inputEmail.value,
  };

  users.push(user);
  console.log(users);
});
