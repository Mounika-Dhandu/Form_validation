function validateForm(event) {
    event.preventDefault(); //This line prevents the default form submission behavior, ensuring that the form is only submitted after validation passes.

    const fullName = document.getElementById('fullname').value.trim(); //Retrieves the value of the Full Name input field and trims any leading or trailing whitespace.
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmpassword').value.trim();

    const errorMessage = document.getElementById('error-message'); //Retrieves the element that will display error messages.
    errorMessage.innerHTML = ''; //Clears any previous error messages before performing new validations.


    //Checks if the Full Name field has at least 5 characters. If not, it displays an error message and exits the function.
    if (fullName.length < 5) {
        errorMessage.innerHTML = 'Full Name must be at least 5 characters long.';
        return;
    }

    if (!email.includes('@')) {
        errorMessage.innerHTML = 'Enter a valid email address.';
        return;
    }

    if (phone.length !== 10 || phone === '123456789') {
        errorMessage.innerHTML = 'Enter a valid 10-digit phone number.';
        return;
    }

    if (password.length < 8 || password === 'password' || password === fullName) {
        errorMessage.innerHTML = 'Password must be at least 8 characters long and should not be "password" or your name.';
        return;
    }

    //Compares the Password and Confirm Password fields. If they don't match, it displays an error message and exits the function.
    if (password !== confirmPassword) {
        errorMessage.innerHTML = 'Passwords do not match.';
        return;
    }

    // If all validations pass, submit the form
    document.getElementById('myForm').submit(); // Submits the form programmatically if all validations pass.
}