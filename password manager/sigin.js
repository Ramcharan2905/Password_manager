
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    if (username.trim() === '' || password.trim() === '') {
        alert("Please fill in both username and password fields");
        return;
    }

    let passwords = localStorage.getItem("passwords");

    if (passwords == null) {
        let json = [];
        
        let encryptedPassword = password;
        json.push({ username: username, password: encryptedPassword });
        alert("Password Saved");
        localStorage.setItem("passwords", JSON.stringify(json));
        // Redirect to the sign_in.html page
        window.location.href = "user_interface.html";
    } else {
        document.querySelector(".hidden").classList.remove("hidden");
    }
});