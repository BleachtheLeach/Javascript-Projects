function regexChecker() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    const nameRegex = /^[A-Z][a-z]{1,}$/;

    if (nameRegex.test(firstName) && nameRegex.test(lastName)) {
        alert('Yay! Your inputs were all correct!');
    } else {
        alert('Oh no! That\'s an invalid format!');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', regexChecker);
});
