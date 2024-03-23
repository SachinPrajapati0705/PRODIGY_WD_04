document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Disable submit button to prevent multiple submissions
        submitButton.disabled = true;

        // Clear existing error messages
        clearErrorMessages();

        // Get form input values
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const subjectInput = document.getElementById("subject");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        // Perform form validation
        let isValid = true;
        if (!name) {
            displayError("Please enter your name.", nameInput);
            isValid = false;
        }

        // Validate email format using regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            displayError("Please enter a valid email address.", emailInput);
            isValid = false;
        }

        if (!subject) {
            displayError("Please enter a subject.", subjectInput);
            isValid = false;
        }

        if (!message) {
            displayError("Please enter a message.", messageInput);
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission (replace this with your actual form submission logic)
            console.log("Form submitted:");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Subject:", subject);
            console.log("Message:", message);

            // Display success message
            alert("Form submitted successfully!");

            // Reset the form
            contactForm.reset();
        } else {
            // Enable submit button if form validation fails
            submitButton.disabled = false;
        }
    });

    // Function to display error message and style invalid input
    function displayError(message, inputElement) {
        const errorElement = document.createElement("div");
        errorElement.classList.add("error-message");
        errorElement.textContent = message;

        // Insert error message after the input field
        inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);

        // Add invalid style to input field
        inputElement.classList.add("invalid");
    }

    // Function to clear error messages and reset input styles
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function (errorMessage) {
            errorMessage.remove();
        });

        const invalidInputs = document.querySelectorAll(".invalid");
        invalidInputs.forEach(function (input) {
            input.classList.remove("invalid");
        });
    }

    // Clear error messages when users start typing in the input fields
    contactForm.addEventListener("input", function (event) {
        if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA") {
            clearErrorMessages();
        }
    });

    // Ask for confirmation before resetting the form
    contactForm.addEventListener("reset", function (event) {
        if (!confirm("Are you sure you want to clear the form?")) {
            event.preventDefault();
        }
    });
});
