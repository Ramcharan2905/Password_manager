
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    let searchUsername = document.querySelector("#username").value;
    let password=document.querySelector("#password").value;

    let passwords = localStorage.getItem("passwords");

    if (passwords == null) {
        console.log("No passwords saved");
    } else {
        let json = JSON.parse(passwords);
        let found = json.find(item => item.username === searchUsername);
        if (found && found.password === password) {
            // Redirect to the sign_in.html page
            window.location.href = "user_interface.html";
        } else {
            document.querySelector(".hidden").classList.remove("hidden");
        }
    }
});