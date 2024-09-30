document.getElementById('loginBtn').onclick = function() {
    document.getElementById('popup').style.display = 'block';
};

document.getElementsByClassName('close')[0].onclick = function() {
    document.getElementById('popup').style.display = 'none';
};

document.getElementById('authForm').onsubmit = function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const nic = document.getElementById('nic').value;

    // Check if user already exists
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (document.getElementById('formTitle').innerText === "Sign In") {
        if (existingUser) {
            alert(`Welcome back, ${name}!`);
            showCarDetails();
            closePopup();
        } else {
            alert('User not found. Please sign up.');
        }
    } else {
        // Sign Up
        if (existingUser) {
            alert('User already exists. Please log in.');
        } else {
            users.push({ name, email, phone, nic });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created! You can now log in.');
            toggleForm();
        }
    }
};

document.getElementById('toggleText').onclick = function() {
    toggleForm();
};

function toggleForm() {
    const title = document.getElementById('formTitle');
    if (title.innerText === "Sign In") {
        title.innerText = "Sign Up";
        document.getElementById('phone').style.display = 'block';
        document.getElementById('nic').style.display = 'block';
    } else {
        title.innerText = "Sign In";
        document.getElementById('phone').style.display = 'none';
        document.getElementById('nic').style.display = 'none';
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function showCarDetails() {
    document.getElementById('carDetails').classList.remove('hidden');
    document.getElementById('carInfo').innerText = "Here are the details of your car: Model X, Year 2022, Color Red.";
}
