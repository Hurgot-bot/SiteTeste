var menu = document.getElementById("header-options");
var logo = document.getElementById("logo");
var menuLinks = document.querySelectorAll("#header-options li");

logo.addEventListener('click', () => {

    console.log(menu.style.display == "");
    if (menu.style.display != "none" && menu.style.display != "") {
        menu.style.display = "none";
        hideOptions();
        console.log("hide");
    } else {
        menu.style.display = "initial";
        animateOptions();
        console.log("show");
    }

});

function animateOptions() {
    console.log("Entered");
    menuLinks.forEach((link, index) => {

        setTimeout(() => {
            link.style.display = "block";
            console.log(link.textContent);
        }, 30 * index);

    });


}

function hideOptions() {
    menuLinks.forEach((link) => {
        link.style.display = "none";
    });
}