const mainContainer = document.querySelector('.mainContainer');
const dashboard = document.querySelector('#dashboard')

mainContainer.addEventListener('submit', loggingOut)

function loggingOut(e){
    e.preventDefault();
    window.location = "landingPage.html"
}
