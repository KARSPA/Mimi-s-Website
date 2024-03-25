

const ratioApparition = 0.3;

let options = {
    root: null,
    rootMargin: "0px",
    threshold: ratioApparition,
  };
  

function handleIntersect(entries, observer){
    entries.forEach(entry => {
        if(entry.intersectionRatio > ratioApparition){
            // console.log("Observé !")
            if(entry.target.classList.contains("titles-container")){ //Si l'élément observé est le title container, on fera appraitre la flèche si celle ci à disparue
                goDownBtn.style.visibility = "visible";
            }else if(entry.target.classList.contains("reveal")){
                // console.log(entry);
                entry.target.classList.add("reveal-visible")
                observer.unobserve(entry.target)
            }
        }})
}


const observer = new IntersectionObserver(handleIntersect, options);

// Observe les élements gérant l'apparition des flèches de navigation
document.querySelectorAll(".observed").forEach(element=>{
    observer.observe(element);
})

// Gère l'observation des éléments révélés au chargement de la page/appartition à l'écran
document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element)
})


const divArr = [...document.querySelectorAll("main .senses-container")].map(element => [element.offsetTop, element.clientHeight]);

const goDownBtn = document.querySelector(".go-down-btn");
console.log(goDownBtn)

goDownBtn.addEventListener("click", goToNextSection)


function goToNextSection(){
    let filteredArr = divArr.filter(element => element[0] > window.scrollY + Math.max(element[1]/2,window.innerHeight/2));

    // console.log(filteredArr);
    
    if(filteredArr.length > 0){
    window.scrollTo({
        top:filteredArr[0][0] - (window.innerHeight - filteredArr[0][1])/2 + 30,
        left:0,
        behavior:"smooth"
    })   
    }
    console.log(goDownBtn.firstElementChild)
    goDownBtn.style.visibility = "hidden"
    
    // console.log(window.scrollY);
    // console.log(document.body.clientHeight - window.innerHeight);
}