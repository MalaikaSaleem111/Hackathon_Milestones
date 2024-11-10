const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;


form.addEventListener('submit', (event) => {
    event.preventDefault()

 //collect input values
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
  <p><b>Name:</b>${name}</p>
  <p><b>Email:</b>${email}</p>
  <p><b>Phone:</b>${phone}</p>

  <h3>Education</h3>
   <ul>
        ${education.map((edu) => `<li>${edu}</li>`).join('')}
    </ul>

  <h3>Experience</h3>
   <p>${experience}</p>

   <h3>Skills</h3>
    <ul>
        ${skills.map((skill) => `<li>${skill}</li>`).join('')}
    </ul>`


});
