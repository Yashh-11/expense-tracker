// No API because we are using localStorage for users & expenses

function getToken() {
    return localStorage.getItem("token");
}

function getCurrentUser() {
    const userJson = localStorage.getItem("currentUser");
    return userJson ? JSON.parse(userJson) : null;
}

function saveAuth(user) {
    localStorage.setItem("token", "loggedin");
    localStorage.setItem("currentUser", JSON.stringify(user));
}

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
}
