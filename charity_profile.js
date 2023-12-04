
// Function to toggle display of volunteer form
function toggleVolunteerForm() {
    var form = document.getElementById("volunteerForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}

// Event listener for Volunteer Now buttons
function addVolunteerEventListeners() {
    var volunteerBtns = document.querySelectorAll('.volunteer-button');
    volunteerBtns.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            toggleVolunteerForm();
            showAdditionalInfo(index + 1); // Pass the index (1-based) to the function
        });
    });
}

// Function to show additional information
function showAdditionalInfo(charityNumber) {
    var additionalInfo = document.getElementById("additionalInfo");
    additionalInfo.innerHTML = "<p>Additional details for Charity " + charityNumber + ".</p>";
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    addVolunteerEventListeners();
});