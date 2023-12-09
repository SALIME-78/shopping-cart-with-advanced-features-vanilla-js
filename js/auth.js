// Get list of users from local storage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Add new user
function register() {
    
    const username = document.getElementById("signup-username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (!username || !password || !email) {
        alert("All fields are required !");
        return;
    }

    users.push({ id: users.length + 1, username, email, password, isLoggedIn: false, cart: [], wishList: [] });
    localStorage.setItem("users", JSON.stringify(users))

    window.location.href = "login.html";
}

// Login
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (!username || !password) {
        alert("Please enter a username and password.");
        return;
    }

    let user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        alert("User not found.");
        return;
    }

    user.isLoggedIn = true;
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "index.html";
}

// Logout
function logout() {
    
    let user = users.find(User => User.isLoggedIn == true)

    user.isLoggedIn = false
    
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "login.html";
}

