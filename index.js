const aboutMePic = document.querySelector(".about-me-pic")
const viewBox = document.querySelector(".view")
console.log("JavaScript file is loaded.");
const myAge = document.getElementById("my-age");
myAge.textContent += "31";

function navigate(page) {
  aboutMePic.classList.add("d-none");
  fetch(`${page}.html`)
      .then(response => response.text())
      .then(html => {
        viewBox.innerHTML = html;
      })
      .catch(err => console.error('Error loading page:', err));
}

function myAgeScript() {
  const birthDate = new Date(birth);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birth date hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  myAge.textContent = age;
}

// document.getElementById("my_label").innerHTML = myAgeScript();


// function overviewScript() {
//   fetch(`overview.html`)
//   .then(response => response.text())
//   .then(html => {
//       document.querySelector('.view').innerHTML = html;
//   })
//   .catch(err => console.error('Error loading page:', err));

//   // overview.classList.remove("d-none");
// }
