let key // posição do utilizador no array de utilizadores

// verificar se existe utilizador e enviar para a página principal
function confirmUser() {

    const userEmail = document.getElementById("userEmail").value
    const userPassword = document.getElementById("userPassword").value
    if (JSON.parse(localStorage.getItem("usersData"))) {
        for (let i = 0; i < JSON.parse(localStorage.getItem("usersData")).length; i++) {
            if (userEmail == JSON.parse(localStorage.getItem("usersData"))[i].email) {
                if (userPassword == JSON.parse(localStorage.getItem("usersData"))[i].password) {
                    document.getElementById("alertBoxDanger").classList.add("d-none")
                    document.getElementById("alertBoxDanger").classList.remove("d-flex")
                    key = i
                    localStorage.setItem("user", i)
                    window.location.href = "userPage.html";
                } else {
                    document.getElementById("alertBoxDanger").classList.remove("d-none")
                    document.getElementById("alertBoxDanger").classList.add("d-flex")
                }
            } else {
                document.getElementById("alertBoxDanger").classList.remove("d-none")
                document.getElementById("alertBoxDanger").classList.add("d-flex")
            }
        }
    } else {
        document.getElementById("alertBoxDanger").classList.remove("d-none")
        document.getElementById("alertBoxDanger").classList.add("d-flex")
    }
}

// adicionar o listener ao botão de Entrar
document.getElementById("btnSubmit").addEventListener("click", function (e) {
    if (document.getElementById("form").checkValidity() == true) {
        e.preventDefault()
        confirmUser()
    }
})