

// Gère l'animation (et le delai) de l'apparition des différentes images.


const imgArr = document.querySelectorAll(".gallery-container img");

console.log(imgArr);

console.log(imgArr[2].style)
function addAnimationDelay(img, delay){
    img.style = `animation: slideinbis forwards 1.5s ${delay}s cubic-bezier(.5,0,0,1)`;
}

imgArr.forEach((img,index)=>addAnimationDelay(img,index/5))