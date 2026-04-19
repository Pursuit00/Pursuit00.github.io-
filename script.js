document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(e) {
        let valid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        // Validate Name
        if (nameInput.value.trim() === '') {
            valid = false;
            alert('Name is required.');
        }

        // Validate Email
        if (emailInput.value.trim() === '') {
            valid = false;
            alert('Email is required.');
        } else if (!/
        ^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,4}$/.test(emailInput.value)) {
            valid = false;
            alert('Please enter a valid email address.');
        }

        if (!valid) {
            e.preventDefault();
        }
    });
});