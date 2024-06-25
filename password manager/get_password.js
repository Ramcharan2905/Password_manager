const deletePassword = (username, website) => {
    let data = localStorage.getItem("websites");
    if (data != null) {
        let arr = JSON.parse(data);
        arr = arr.filter(element => element.username !== username || element.website !== website);
        localStorage.setItem("websites", JSON.stringify(arr));
        showPasswords(website);
    }
}

const showPasswords = (website) => {
    let tb = document.querySelector("table");
    let data = localStorage.getItem("websites");

    if (data == null || JSON.parse(data).length === 0) {
        tb.innerHTML = "No Data to Show";
    } else {
        tb.innerHTML = `<tr>
                <th>Website</th>
                <th>Username</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`;

        let arr = JSON.parse(data);

        let str = "";
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];

            if (element.website === website) {
                str += `<tr>
                <td>${element.website}</td>
                <td onclick="copyText('${element.username}')">${element.username}</td>
                <td onclick="copyText('${element.password}')">${element.password}</td>
                <td><button class="btn-sm" onclick="deletePassword('${element.username}', '${element.website}')">Delete</button></td>
            </tr>`;
            }
        }
        if (str === "") {
            str = "<tr><td colspan='4'>No matching website found</td></tr>";
        }
        tb.innerHTML += str;
    }
    document.querySelector("#website").value = "";
}

let btn = document.querySelector(".btn");

showPasswords();

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let website = document.querySelector("#website").value.toLowerCase();
    showPasswords(website);
});
