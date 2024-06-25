let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let website = document.querySelector("#website").value.toLowerCase();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    let websites = localStorage.getItem("websites");

    if (websites == null) {
        let json = [];
        json.push({ website: website, username: username, password: password });
        alert("Password Saved");
        localStorage.setItem("websites", JSON.stringify(json));
    } else {
        let json = JSON.parse(websites);
        json.push({ website: website, username: username, password: password });
        alert("Password Saved");
        localStorage.setItem("websites", JSON.stringify(json));
    }
});