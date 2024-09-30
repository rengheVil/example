let users = JSON.parse(localStorage.getItem('users')) || [];

// Login Modal
document.getElementById('loginButton').onclick = function() {
    document.getElementById('loginModal').style.display = "block";
}

document.getElementById('registerButton').onclick = function() {
    document.getElementById('registerModal').style.display = "block";
}

// Close Modal
document.querySelectorAll('.close').forEach(function(closeButton) {
    closeButton.onclick = function() {
        this.closest('.modal').style.display = "none";
    }
});

// Click outside to close modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Login Form Submission
document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById('loginName').value;
    const email = document.getElementById('loginEmail').value;
    
    const user = users.find(u => u.name === name && u.email === email);
    
    if (user) {
        alert('Welcome to your dashboard, ' + name);
        // Redirect to customer dashboard logic here
        // window.location.href = "dashboard.html";
    } else {
        alert('Invalid credentials. Please try again.');
    }
    document.getElementById('loginModal').style.display = "none";
}

// Registration Form Submission
document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault();
    
    const newUser = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        phone: document.getElementById('regPhone').value,
        nic: document.getElementById('regNic').value
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration successful! You can now log in.');
    document.getElementById('registerModal').style.display = "none";
}
