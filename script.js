document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("rsvp-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const guests = document.getElementById("guests").value;

        if (!name || !email || !guests) {
            alert("Please fill in all fields.");
            return;
        }

        // Send RSVP details via email (Using Formspree for simplicity)
        fetch("https://formspree.io/f/YOUR_FORM_ID", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                guests: guests
            })
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you for your RSVP!");
                form.reset();
            } else {
                alert("Error sending RSVP. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        });
    });
});
