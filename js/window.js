const productchar = document.getElementById("character")
const productchar1 = document.getElementById("character1")
const productchar2 = document.getElementById("character2")
const productchar3 = document.getElementById("character3")
const productchar4 = document.getElementById("character4")
window.addEventListener("load", function(){
    productchar.style.transform="translateY(-14em)";
    productchar.style.transition="transform 1s ease-in-out";
    productchar1.style.transform="translateY(-14em)";
    productchar1.style.transition="transform 1s ease-in-out";
    productchar2.style.transform="translateY(-14em)";
    productchar2.style.transition="transform 1s ease-in-out";
    productchar3.style.transform="translateY(-14em)";
    productchar3.style.transition="transform 1s ease-in-out";
    productchar4.style.transform="translateY(-14em)";
    productchar4.style.transition="transform 1s ease-in-out";
})


watchbutton.addEventListener("click", function(e) {
    window.location.href ="/men-section.html"
})