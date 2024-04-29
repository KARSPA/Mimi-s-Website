

const hamburgerBtn = document.querySelector(".menu-icon-btn")

const navigation = document.querySelector(".navbar ")

hamburgerBtn.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerBtn.classList.toggle("active")
    navigation.classList.toggle("active")
}