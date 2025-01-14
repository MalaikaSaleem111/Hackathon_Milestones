const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement;
const shareableLinkELement = document.getElementById("shareable-link") as HTMLAnchorElement
const downloadpdf = document.getElementById('downloadpdf') as HTMLButtonElement;


form.addEventListener('submit', (event) => {
    event.preventDefault()

    

 //collect input values
 const username = (document.getElementById("username") as HTMLInputElement).value
 const name = (document.getElementById('name') as HTMLInputElement).value
 const email = (document.getElementById('email') as HTMLInputElement).value
 const phone = (document.getElementById('phone') as HTMLInputElement).value
 const education = (document.getElementById('education') as HTMLInputElement).value.split('\n')
 const experience = (document.getElementById('experience') as HTMLInputElement).value
 const skills = (document.getElementById('skills') as HTMLInputElement).value.split('\n')

    // generate the resume content dynamically

  resumeOutput.innerHTML  = `
  <h2><b>Resume</b></h2>
  <h3>Personal Information</h3>
  <p><b>Name:</b><span contenteditable="true"> ${name} </span></p>
  <p><b>Email:<span contenteditable="true"></b>${email}</span></p>
  <p><b>Phone:<span contenteditable="true"></b>${phone}</span></p>

  <h3>Education</h3>
   <ul>
       <span contenteditable="true"> ${education.map((edu) => `<li>${edu}</li>`).join('')}</span>
    </ul>

  <h3>Experience</h3>
   <p><span contenteditable="true">${experience}</span></p>

   <h3>Skills</h3>
    <ul>
        <span contenteditable="true">${skills.map((skill) => `<li>${skill}</li>`).join('')}</span>
    </ul>`
     // Generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Show the shareable URL link container
    shareableLinkContainer.style.display = 'block';

    // Set the URL as the href and text of the link
    shareableLinkELement.href = shareableURL;
    shareableLinkELement.textContent = shareableURL;

});

// Handle PDF download
  downloadpdf.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF
    });

    // Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');
  if (username) {
  
  // Autofill form if data is found in localStorage
  let savedResumeData = localStorage.getItem(username);
  if (savedResumeData) {
  let resumeData = JSON.parse(savedResumeData);
  (document.getElementById('username') as HTMLInputElement).value =
  username;
  (document.getElementById('name') as HTMLInputElement).value =
  resumeData.name;
  (document.getElementById('email') as HTMLInputElement).value =
  resumeData.email;
  (document.getElementById('phone') as HTMLInputElement).value =
  resumeData.phone;
  (document.getElementById('education') as HTMLTextAreaElement).value =
  resumeData.education;
  (document.getElementById('experience') as HTMLTextAreaElement).value
  = resumeData.experience;
  (document.getElementById('skills') as HTMLTextAreaElement).value =
  resumeData.skills;
  }
  }
  });