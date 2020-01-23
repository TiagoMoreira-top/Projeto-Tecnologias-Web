function confirmUser() {

    const userEmail = document.getElementById("userEmail").value
    const userPassword = document.getElementById("userPassword").value

    for (let i = 0; i < JSON.parse(localStorage.getItem("usersData")).length; i++) {
        console.log(JSON.parse(localStorage.getItem("usersData"))[i].email);
        console.log(userEmail);
        if (userEmail == JSON.parse(localStorage.getItem("usersData"))[i].email) {
            if (userPassword == JSON.parse(localStorage.getItem("usersData"))[i].password) {
                window.location.href = "teste.html";
            } else alert("Password Incorreta!")
        }
    }
}

document.getElementById("btnSubmit").addEventListener("click", function(e) {
    if (document.getElementById("btnSubmit").checkValidity() == true) {
        e.preventDefault()
        confirmUser()
    }
})