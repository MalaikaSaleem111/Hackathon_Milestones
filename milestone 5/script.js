var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resumeOutput');
var shareableLinkContainer = document.getElementById('shareable-link-container');
var shareableLinkELement = document.getElementById("shareable-link");
var downloadpdf = document.getElementById('downloadpdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input values
    var username = document.getElementById("username").value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value.split('\n');
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split('\n');
    // generate the resume content dynamically
    resumeOutput.innerHTML = "\n  <h2><b>Resume</b></h2>\n  <h3>Personal Information</h3>\n  <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, " </span></p>\n  <p><b>Email:<span contenteditable=\"true\"></b>").concat(email, "</span></p>\n  <p><b>Phone:<span contenteditable=\"true\"></b>").concat(phone, "</span></p>\n\n  <h3>Education</h3>\n   <ul>\n       <span contenteditable=\"true\"> ").concat(education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</span>\n    </ul>\n\n  <h3>Experience</h3>\n   <p><span contenteditable=\"true\">").concat(experience, "</span></p>\n\n   <h3>Skills</h3>\n    <ul>\n        <span contenteditable=\"true\">").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</span>\n    </ul>");
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Show the shareable URL link container
    shareableLinkContainer.style.display = 'block';
    // Set the URL as the href and text of the link
    shareableLinkELement.href = shareableURL;
    shareableLinkELement.textContent = shareableURL;
});
// Handle PDF download
downloadpdf.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
