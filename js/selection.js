cate1.addEventListener("click", function () {
    if (cate2.style.display === "none") {
        cate2.style.display = "block";
        womenimg1.style.animation = "check-it-out 1s ease-in-out 0s 1 normal"
        menimg1.style.animation = "check-it-out 1s ease-in-out 0s 1 normal"
        kidsimg1.style.animation = "check-it-out 1s ease-in-out 0s 1 normal"
        electronicimg1.style.animation = "check-it-out 1s ease-in-out 0s 1 normal"
        posterimg1.style.animation = "check-it-out 1s ease-in-out 0s 1 normal"
    } else {
        cate2.style.display = "none";
    }
})
searchimage.addEventListener("click", function () {
    if (search.style.display === "none") {
        search.style.display = "block";
    } else {
        search.style.display = "none";
    }
})
lb.addEventListener("click", function () {
    if (listbobber.style.display === "none") {
        listbobber.style.display = "block";
        listbobber.style.animation = "listbobberani 0.2s ease-in-out 0s 1 normal"
    } else {
        listbobber.style.animation = "listbobberani 0.2s ease-in-out 0s 1 reverse"
        listbobber.style.display = "none";
    }
})
const forusersection = document.getElementsByClassName("chat-page")
const foruser = document.getElementById("customerbutton")
foruser.addEventListener("click", function () {
    if (customerpage.style.display === "none") {
        customerpage.style.animation = "chatani 0.1s ease-in-out 0s 1 normal";
        customerpage.style.display = "block";
    } else {
        customerpage.style.display = "none";
    }
})

home.addEventListener("click", function () {
    if (homesections.style.display === "none") {
        homesections.style.animation = "homesectionani 0.1s ease-in 0s 1 normal";
        homesections.style.display = "block";
        loginsections.style.display = "none";
        categorysections.style.display = "none";
        cartsections.style.display = "none";
    } else {
        homesections.style.display = "none";
    }
})
// home.addEventListener("mouseover",function(){
//     if(homesections.style.display==="none"){
//         homesections.style.animation="sectionani 0.1s ease-in 0s 1 normal";
//         homesections.style.display="block";
//     }else{
//         homesections.style.display="none";
//     }
// })
cart.addEventListener("click", function () {
    if (cartsections.style.display === "none") {
        cartsections.style.animation = "sectionani 0.1s ease-in 0s 1 normal";
        cartsections.style.display = "block";
        loginsections.style.display = "none";
        categorysections.style.display = "none";
        homesections.style.display = "none";
    } else {
        cartsections.style.display = "none";
    }
})
// cart.addEventListener("mouseover",function(){
//     if(cartsections.style.display==="none"){
//         cartsections.style.animation="sectionani 0.1s ease-in 0s 1 normal";
//         cartsections.style.display="block";
//     }else{
//         cartsections.style.display="none";
//     }
// })

cate.addEventListener("click", function () {
    if (categorysections.style.display === "none") {
        categorysections.style.animation = "categoryani 0.2s ease-in 0s 1 normal";
        categorysections.style.display = "block";
        loginsections.style.display = "none";
        homesections.style.display = "none";
        cartsections.style.display = "none";
    } else {
        categorysections.style.display = "none";
    }
});


loginbutton.addEventListener("click", function () {
    if (loginsections.style.display === "none") {
        loginsections.style.animation = "loginani 10ms ease-in 0s 1 normal";
        loginsections.style.display = "flex";
        homesections.style.display = "none";
        categorysections.style.display = "none";
        cartsections.style.display = "none";

    } else {
        loginsections.style.display = "none";
    }
})
// customerpage.style.backgroundColor="black";