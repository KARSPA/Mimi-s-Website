const navBtns = [...document.querySelectorAll(".sense-btn")]
console.log(navBtns);


navBtns.forEach(btn => btn.addEventListener("click", (e)=> goToSection(e)))

function goToSection(e){
    let desiredSense = e.target.classList[0];
    let senseIndex = desiredSense[desiredSense.length-1]-1;
    // console.log(senseIndex);

    window.scrollTo({
        top:divArr[senseIndex][0] - (window.innerHeight - divArr[senseIndex][1])/2 + 100,
        left:0,
        behavior:"smooth"
    })   
}




const divArr = [...document.querySelectorAll("main .sense-card")].map(element => [element.offsetTop, element.clientHeight]);
console.log(divArr);

const goDownBtn = document.querySelector(".go-down-btn");
console.log(goDownBtn)

goDownBtn.addEventListener("click", goToNextSection)


function goToNextSection(){
    let filteredArr = divArr.filter(element => element[0] > window.scrollY + Math.max(element[1]/2,window.innerHeight/2));

    // console.log(filteredArr);
    
    if(filteredArr.length > 0){
    window.scrollTo({
        top:filteredArr[0][0] - (window.innerHeight - filteredArr[0][1])/2 + 50,
        left:0,
        behavior:"smooth"
    })   
    }
    // goDownBtn.style.visibility = "hidden"
    
    // console.log(window.scrollY);
    // console.log(document.body.clientHeight - window.innerHeight);
}

const goToTopBtn = document.querySelector(".go-to-top-btn");
console.log(goToTopBtn);


goToTopBtn.addEventListener("click", goToTop);

function goToTop(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

window.addEventListener("scroll", handleButtonApparition);

function handleButtonApparition(){
    if(window.scrollY < 800){
        goToTopBtn.style.display = "none"
    }else if(window.scrollY > 800 && window.scrollY < document.body.clientHeight - window.innerHeight - 700){
        goToTopBtn.style.display = "block"
        goDownBtn.style.display = "block"
    }else{
        goDownBtn.style.display = "none"
    }
}
