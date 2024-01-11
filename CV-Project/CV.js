function changeTheme(){
    var element = document.body;
    element.classList.toggle("theme");
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('CV.json')
      .then(response => response.json())
      .then(data => {
        const leftInfo = generateLeftInfo(data.contact, data.education, data.skills);
  
        document.getElementById('myInfo').innerHTML = leftInfo;
      })
      .catch(error => console.error('Error:', error));
  
    function generateLeftInfo(contact, education, skills) {
      return `
        <img src="me.jpg" alt="Photo of ${contact.name}">
        <p class="description">CONTACT ME</p>
        <p class="emoji">&#128222;&emsp;${contact.phone}</p>
        <p class="emoji">&#128231;&emsp;${contact.email}</p>
        <p class="emoji">&#128204;&emsp;${contact.address}</p>
        <br>
        <hr>
        <p class="description">EDUCATION</p>
        <p class="leftInfo">${education.date1}</p>
        <p class="leftInfo">${education.school1}</p>
        <br>
        <p class="leftInfo">${education.date2}</p>
        <p class="leftInfo">${education.school2}</p>
        <br>   
        <hr>
        <p class="description">SKILLS</p>
        <p class="leftInfo">${skills.first}</p>
        <p class="leftInfo">${skills.second}</p>
      `;
    }
});