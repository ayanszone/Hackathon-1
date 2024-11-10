// Get references to the form and display area
var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeDisplay');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var certifications = document.getElementById('certifications').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content
    var resumeHTML = "    \n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Address:</b> ").concat(address, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Certifications</h3>\n        <p>").concat(certifications, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
