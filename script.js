var menu = document.getElementById("header-options");
var logo = document.getElementById("logo");
var menuLinks = document.querySelectorAll("#header-options li");

logo.addEventListener('click',() =>{
    

    if(menu.style.display!="none"){
        menu.style.display = "none";
        hideOptions(); 
        console.log("hide");
    }else{
        menu.style.display = "";
        animateOptions();
        console.log("show");
    }
    
});

 function animateOptions(){
    console.log("Entered");
    menuLinks.forEach((link,index) => {
        
        setTimeout(() => {
            link.style.display = "";
            console.log("Show");
          }, 30*index);
        
    });

    
}

 function hideOptions(){
    menuLinks.forEach((link) => {
        link.style.display = "none";
    });
}


