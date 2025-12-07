<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Audio App</title>
</head>
<body style="font-family: Arial; padding: 20px;">
    
    <h2>Login / Signup</h2>

    <input id="email" type="text" placeholder="Email" /><br><br>
    <input id="password" type="password" placeholder="Password" /><br><br>

    <button onclick="signup()">Signup</button>
    <button onclick="login()">Login</button>

    <p id="result"></p>

    <!-- Firebase Scripts -->
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"></script>

    <!-- Config + App Logic -->
    <script src="firebase-config.js"></script>
    <script src="app.js"></script>
</body>
</html>
