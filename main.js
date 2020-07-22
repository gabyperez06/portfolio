//arrow button in home page
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

arrowDown.hidden = true;

arrowUp.onclick = function() {
    arrowUp.hidden = true;
    arrowDown.hidden = false;
}

arrowDown.onclick = function() {
    arrowDown.hidden = true;
    arrowUp.hidden = false;
}

//about content
const aboutButton = document.getElementById('about-button');
const menuBox = document.getElementById('menu-container');
const aboutContainer = document.getElementById('about-hidden-container');
const backButton = document.getElementById('back-button')

aboutButton.onclick = function() {
    menuBox.style.visibility = "hidden";
    aboutContainer.style.visibility = "visible";
}

backButton.onclick = function() {
    menuBox.style.visibility = "visible";
    aboutContainer.style.visibility = "hidden";
}