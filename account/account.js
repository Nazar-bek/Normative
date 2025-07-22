const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const address = document.getElementById("address");
const currentpassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

const cancelBtn = document.querySelector(".cancel__btn");
const saveBtn = document.querySelector(".save__btn");

function loadUserData() {
  const data = JSON.parse(localStorage.getItem("userInfo"));
  if (data) {
    firstName.value = data.firstName || "";
    lastName.value = data.lastName || "";
    email.value = data.email || "";
    address.value = data.address || "";
  }
}

loadUserData();

function showError(message) {
  alert(message);
}

function saveUserData() {
  const currentUserData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    address: address.value,
  };

  if (currentpassword.value || newPassword.value || confirmPassword.value) {
    const storedPassword = localStorage.getItem("userPassword") || "";
    if (storedPassword) {
      if (currentpassword.value !== storedPassword) {
        return showError("Hozirgi parolingiz notog'ri");
      }
    }
    if (newPassword.value !== confirmPassword.value) {
      return showError("Kiritgan yangi parollaringiz notog'ri");
    }

    localStorage.setItem("userPassword", newPassword.value);
  }

  localStorage.setItem("userInfo", JSON.stringify(currentUserData));
  alert("Hammasi hatosiz saqlandi!");
  clearPasswordsInput()
}

function clearPasswordsInput() {
  currentpassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
}


function cancelData(){
    loadUserData()
    clearPasswordsInput()
}

saveBtn.addEventListener("click", (e) =>{
    e.preventDefault()
    saveUserData()
})

cancelBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    cancelData()
})