

// Apparition au scroll des différents éléments de la page
const ratioApparition = 0.4;

let options = {
    root: null,
    rootMargin: "0px",
    threshold: ratioApparition,
  };
  


function handleIntersect(entries, observer){
    entries.forEach(entry => {
        if(entry.intersectionRatio > ratioApparition){
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target)
        }})
}


const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll(".reveal").forEach(element=>{
    observer.observe(element);

})

// Fin de la gestion des apparitions




// Gestion des DEUX boutons de navigation


    // Gestion du hover et du changement de couleur
const navButtons = [...document.querySelectorAll(".nav-buttons button")]

navButtons.forEach(button => {
    button.addEventListener("mouseenter", changeToBrown);
    button.addEventListener("mouseleave", changeToWhite);
})

function changeToBrown(e){
    // console.log(e.target);

    let imgSrc = e.target.firstElementChild.src;
    e.target.firstElementChild.src = imgSrc.slice(0,imgSrc.length-9) + "brown.svg";
    
}

function changeToWhite(e){
    // console.log(e.target);

    let imgSrc = e.target.firstElementChild.src;
    e.target.firstElementChild.src = imgSrc.slice(0,imgSrc.length-9) + "white.svg";
    
}
    // Fin de gestion du hover



    // Gestion du scrollToTop
const goToTopBtn = document.querySelector(".go-to-top-btn");

goToTopBtn.style.display = "none";
window.addEventListener("scroll", handleButtonApparition);

function handleButtonApparition(){
    if(window.scrollY < 800){
        goToTopBtn.style.display = "none"
    }else if(window.scrollY > 800 && window.scrollY < document.body.clientHeight - window.innerHeight){
        goToTopBtn.style.display = "block"
        goDownBtn.style.display = "block"
    }else{
        goDownBtn.style.display = "none"
    }
}

goToTopBtn.addEventListener("click", goToTop);

function goToTop(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}



    // Gestion du goToNextSection
const divArr = [...document.querySelectorAll("main .scrolldiv")].map(element => [element.offsetTop, element.clientHeight]);

// console.log(divArr[1][0]);
const goDownBtn = document.querySelector(".go-down-btn");

goDownBtn.addEventListener("click", goToNextSection)

function goToNextSection(){
    
    let filteredArr = divArr.filter(element => element[0] > window.scrollY + Math.max(element[1]/2,window.innerHeight/2));

    console.log(filteredArr);
    
    if(filteredArr.length > 0){
    window.scrollTo({
        top:filteredArr[0][0] - (window.innerHeight - filteredArr[0][1])/2 + 50,
        left:0,
        behavior:"smooth"
    })   
    }
    
    console.log(window.scrollY);
    console.log(document.body.clientHeight - window.innerHeight);
}


// GESTION DE LA NAVIGATION