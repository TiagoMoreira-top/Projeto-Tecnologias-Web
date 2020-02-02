let checkEmail

// adicionar novo utilizador no localStorage
function addUser() {
    checkEmail = 0
    users = []
    if (localStorage.getItem("usersData") != null) {
        users = JSON.parse(localStorage.getItem("usersData"))
        const userEmail = document.getElementById("userEmail").value
        for (let i = 0; i < JSON.parse(localStorage.getItem("usersData")).length; i++) {
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

    if (checkEmail == 0) {
        const userName = document.getElementById("userName").value
        const userEmail = document.getElementById("userEmail").value
        const userPassword = document.getElementById("userPassword").value

        const obj = {
            name: userName,
            email: userEmail,
            password: userPassword,
            theme: "themeLightGrey",
            imc: ""
        }
        users.push(obj)
        localStorage.setItem("usersData", JSON.stringify(users))
        document.getElementById("alertBoxDanger").classList.add("d-none")
        document.getElementById("alertBoxDanger").classList.remove("d-flex")
        document.getElementById("alertBoxSuccess").classList.add("d-flex")
        document.getElementById("alertBoxSuccess").classList.remove("d-none")
    }
}

// adicionar o listener ao botão de Registar utilizador
document.getElementById("btnSubmit").addEventListener("click", function (e) {
    if (document.getElementById("form").checkValidity() == true) {
        e.preventDefault()
        addUser()
    }
})