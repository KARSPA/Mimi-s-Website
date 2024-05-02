const hamburgerBtn = document.querySelector(".menu-icon-btn")

const navigation = document.querySelector(".navbar ")

const navBtnsBis = document.querySelectorAll(".nav-buttons button")

hamburgerBtn.addEventListener("click", toggleNavAndScroll)

function toggleNavAndScroll(){
    hamburgerBtn.classList.toggle("active")
    navigation.classList.toggle("active")
    console.log(document.body)
    console.log(window.scrollY)
    
    if(navigation.classList.contains("active")){
        
            document.body.style.top = `-${window.scrollY}px`;
            // console.log("Oui : " + document.body.style.top)
            document.body.style.position = 'fixed';
            navBtnsBis.forEach(btn => btn.style.visibility = "hidden")

        
    }else{
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        navBtnsBis.forEach(btn => btn.style.visibility = "visible")

        

    }
}

// window.addEventListener("scroll", () => console.log(window.scrollY))