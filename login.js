<script>
    const loginForm = document.getElementById('login-form');
   loginForm.addEventListener('submit', function(event) {
       event.preventDefault();

       const username = document.getElementById('username').value;
       const password = document.getElementById('password').value;

       if (username === 'user' && password === 'password') {
        // If login is successful, redirect to the dashboard page
        window.location.href = "dashboard.html";  // Replace this with the page you want to redirect to
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
</script>