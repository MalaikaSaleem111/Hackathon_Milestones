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
    resumeOutput.innerHTML = "\n  <h2><b>Resume</b></h2>\n  <h3>Personal Information</h3>\n  <p><b>Name:</b><span contenteditable=\"true\"> ".concat(name, " </span></p>\n  <p><b>Email:<span contenteditable=\"true\"></b>").concat(email, "</span></p>\n  <p><b>Phone:<span contenteditable=\"true\"></b>").concat(phone, "</span></p>\n\n  <h3>Education</h3>\n   <ul>\n       <span contenteditable=\"true\"> ").concat(education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "</span>\n    </ul>\n\n  <h3>Experience</h3>\n   <p><span contenteditable=\"true\">").concat(experience, "</span></p>\n\n   <h3>Skills</h3>\n    <ul>\n        <span contenteditable=\"true\">").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</span>\n    </ul>");
});
