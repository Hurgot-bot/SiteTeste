//Header-related
var menu = document.getElementById("header-options");
var logo = document.getElementById("logo");
var menuLinks = document.querySelectorAll("#header-options li");
//Botoes
var loginBtn = document.getElementById("login");
var regBtn = document.getElementById("register");
var newsBtn = document.getElementById("news");
var usersBtn = document.getElementById("users");
var blurClick = document.getElementById("blurClick");
//Faces - telas
var loginFace = document.getElementById("login-section");
var regFace = document.getElementById("register-section");
var usersFace = document.getElementById("user-section");
var newsFace = document.getElementById("news-section");
var panels = document.querySelectorAll(".panel");

//Blur
var blur = document.getElementById("blur");

async function connect() {
    const mysql = require("mysql2/promise");
}

logo.addEventListener('click', () => {

    console.log(menu.style.display == "");
    if (menu.style.display != "none" && menu.style.display != "") {
        menu.style.display = "none";
        hideOptions();
    } else {
        menu.style.display = "initial";
        animateOptions();
    }

});

function animateOptions() {
    menuLinks.forEach((link, index) => {

        setTimeout(() => {
            link.style.display = "grid";
        }, 80 * index);

    });


}

function hideOptions() {
    menuLinks.forEach((link) => {
        link.style.display = "none";
    });
}

//Login and register Section

loginBtn.addEventListener('click', () => {
    disablePanelsExcept(loginFace.id);
    triggerShowFace(loginFace);
});

regBtn.addEventListener('click', () => {
    disablePanelsExcept(regFace.id);
    triggerShowFace(regFace);
});


//User section

usersBtn.addEventListener("click", () => {
    disablePanelsExcept(usersFace.id);
    triggerShowFace(usersFace);
});

//clickableAreas
blurClick.addEventListener("click", () => {
    console.log("blurred");
});

//pass for all the faces and disable them, except the chosen one, queryselector all with class x
function triggerShowFace(face) {
    console.log(face.style.display);
    if (face.style.display != "none" && face.style.display != "") {
        face.style.display = "none";
        blur.classList.remove("active");
        console.log("Hide", );
    } else {

        face.style.display = "flex";
        blur.classList.add("active");
        console.log("Show", face.name);


    }
}

function disablePanelsExcept(title) {
    panels.forEach((panel) => {
        if (panel.id != title) {
            panel.style.display = "none";
        }

    });
}