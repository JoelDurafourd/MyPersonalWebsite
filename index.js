const aboutMePic = document.querySelector(".about-me-pic")
const viewBox = document.querySelector('.view')

function navigate(page) {
  aboutMePic.classList.add("d-none");
  fetch(`${page}.html`)
      .then(response => response.text())
      .then(html => {
        viewBox.innerHTML = html;
      })
      .catch(err => console.error('Error loading page:', err));
}

// function overviewScript() {
//   fetch(`overview.html`)
//   .then(response => response.text())
//   .then(html => {
//       document.querySelector('.view').innerHTML = html;
//   })
//   .catch(err => console.error('Error loading page:', err));

//   // overview.classList.remove("d-none");
// }
