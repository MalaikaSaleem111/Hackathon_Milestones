var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resumeOutput');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value.split('\n');
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split('\n');
    // generate the resume content dynamically
    resumeOutput.innerHTML = "\n  <h2><b>Resume</b></h2>\n  <h3>Personal Information</h3>\n  <p><b>Name:</b>".concat(name, "</p>\n  <p><b>Email:</b>").concat(email, "</p>\n  <p><b>Phone:</b>").concat(phone, "</p>\n\n  <h3>Education</h3>\n   <ul>\n        ").concat(education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "\n    </ul>\n\n  <h3>Experience</h3>\n   <p>").concat(experience, "</p>\n\n   <h3>Skills</h3>\n    <ul>\n        ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n    </ul>");
});
