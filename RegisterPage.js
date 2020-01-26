let checkEmail

function addUser() {
    checkEmail = 0
    users = []
    console.log(localStorage.getItem("usersData"));
    if (localStorage.getItem("usersData") != null) {
        users = JSON.parse(localStorage.getItem("usersData"))
        const userEmail = document.getElementById("userEmail").value
        console.log(JSON.parse(localStorage.getItem("usersData")));
        console.log(users);
        for (let i = 0; i < JSON.parse(localStorage.getItem("usersData")).length; i++) {
            console.log(JSON.parse(localStorage.getItem("usersData"))[i].email);
            console.log(userEmail);
            if (userEmail == JSON.parse(localStorage.getItem("usersData"))[i].email) {
                checkEmail = 1
            }
            if (checkEmail == 1) {
                document.getElementById("alertBoxSuccess").classList.add("d-none")
                document.getElementById("alertBoxSuccess").classList.remove("d-flex")
                document.getElementById("alertBoxDanger").classList.add("d-flex")
                document.getElementById("alertBoxDanger").classList.remove("d-none")
            }
        }
    }
console.log(checkEmail);

  if (checkEmail == 0) {
      const userName = document.getElementById("userName").value
        const userEmail = document.getElementById("userEmail").value
        const userPassword = document.getElementById("userPassword").value

        const obj = {
            name: userName,
            email: userEmail,
            password: userPassword,
            theme: "themeLightGrey"
        }
        users.push(obj)
        localStorage.setItem("usersData", JSON.stringify(users))
        document.getElementById("alertBoxDanger").classList.add("d-none")
        document.getElementById("alertBoxDanger").classList.remove("d-flex")
        document.getElementById("alertBoxSuccess").classList.add("d-flex")
        document.getElementById("alertBoxSuccess").classList.remove("d-none")
    }
}

document.getElementById("btnSubmit").addEventListener("click", function (e) {
    console.log(document.getElementById("form").checkValidity());
    if (document.getElementById("form").checkValidity() == true) {
        e.preventDefault()
        addUser()
    }
})