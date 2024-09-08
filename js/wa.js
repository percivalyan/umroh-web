// Get elements
const waFloat = document.getElementById("wa-float");
const waPopup = document.getElementById("wa-popup");
const waClose = document.getElementById("wa-popup-close");
const waForm = document.getElementById("wa-form");

// Show the popup when the button is clicked
waFloat.addEventListener("click", function() {
    waPopup.style.display = "block";
});

// Close the popup when the close button is clicked
waClose.addEventListener("click", function() {
    waPopup.style.display = "none";
});

// Submit the form and redirect to WhatsApp
waForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("wa-name").value;
    const number = document.getElementById("wa-number").value;
    const message = `Halo, nama saya ${name}, nomor saya ${number}`;
    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
    waPopup.style.display = "none";
});
