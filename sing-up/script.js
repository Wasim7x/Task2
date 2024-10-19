function validateForm() {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value; /*get element by id*/
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // chack email consition
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    // check the passaward condition 
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert('Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, and one number.');
        return false; // Prevent form submission
    }

    // Confirm password 
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false; // Prevent form submission
    }

    // If all validations pass
    return true;
}