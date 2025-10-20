# PassHub: Local Password Manager (HTML, CSS, JS)

This repository contains a simple, client-side **password manager** built entirely with **HTML, CSS, and plain JavaScript**.

The application allows a user to create a single master account and then save, retrieve, and delete website credentials. All data is stored directly in the browser's **`localStorage`**.

---

## 📘 Overview

This project demonstrates a multi-page static website that functions as a simple application. It uses JavaScript to manage user authentication and data persistence locally, without requiring any backend database or server.

It simulates a complete user flow: a landing page, a master sign-up page (one user), a master login page, and a "vault" area where users can add and view their saved passwords.

---

## 🧠 Problem Statement

The goal is to provide a front-end-only application where a user can:
1.  Create one **master account** (username and password).
2.  **Log in** using that master account.
3.  **Save** new credentials (website, username, password) to a local "vault".
4.  **Retrieve** and view saved credentials by searching for a website.
5.  **Delete** credentials that are no longer needed.

---

## ⚙️ Tech Stack

-   **HTML5**
-   **CSS3** (for styling and layout)
-   **Vanilla JavaScript** (for DOM manipulation and `localStorage` management)

---

## 📂 Project Structure

Password_manager/ │ <br>
├── index.html # The main landing page ├── index.css │ <br>
├── login.html # Master account login page ├── login.js │ <br>
├── signin.html # Master account creation page (uses sigin.js) ├── sigin.js │ <br>
├── set_password.html # Page to add new website credentials ├── set_password.js │ <br>
├── get_password.html # Page to retrieve and delete credentials ├── get_password.css ├── get_password.js │ <br>

*(Note: `user_interface.html` is redirected to from `login.js`/`sigin.js` but was not included in the files; it likely links to `set_password.html` and `get_password.html`.)*

---

## 🚀 Features

-   **Client-Side Storage**: All data is stored in the browser's `localStorage`.
    -   `"passwords"` key: Stores the master user's credentials.
    -   `"websites"` key: Stores an array of saved website credential objects.
-   **Master Authentication**: A simple login system that checks against the credentials stored in `localStorage`.
-   **Credential Management (CRUD)**:
    -   **Create**: Add new website, username, and password combinations.
    -   **Read**: Search and display saved passwords in a table.
    -   **Delete**: Remove specific credentials from the list.

---

## ⚠️ **Security Warning**

This project is **for educational purposes only** and is **NOT SECURE**.
-   Data is stored in **plain text** in `localStorage`.
-   `localStorage` is easily accessible to anyone with physical access to the computer or through cross-site scripting (XSS) attacks.
-   **Do not use this project to store real or sensitive passwords.**

---

## ▶️ How to Run

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Ramcharan2905/Password_manager.git](https://github.com/Ramcharan2905/Password_manager.git)
    cd Password_manager
    ```

2.  **Open in Browser**
    No server is required. Simply open the `index.html` file in any modern web browser.
    ```bash
    # On Windows
    start index.html
    
    # On macOS
    open index.html
    
    # On Linux
    xdg-open index.html
    ```

3.  **Usage Flow**
    1.  First, go to the **Sign In** page to create your master username and password.
    2.  You will be redirected to the main app (or you can go to **Log In**).
    3.  Use the "Add Password" (`set_password.html`) and "Get Password" (`get_password.html`) pages to manage your vault.
