const cate1= document.getElementById("cate10")
const cate2= document.getElementById("cate11")

function searchViewportChange(mql) {
    if (mql.matches) {
        lb.style.display = 'block';
        listbobber.style.display = 'none';
        search.style.display = 'none';
        brief.style.display = 'none';
        cate1.style.display = 'block';
        cate2.style.display = 'none';
        
    } else {
        lb.style.display = 'none';
        listbobber.style.display = 'none';
        cate1.style.display = 'none';
        cate2.style.display = 'none';
        brief.style.display = 'flex';
        search.style.display = 'block';
        category.style.display = 'none';
        search.addEventListener("click", function(){
            if(search.style.width ==="10vw"){
                search.style.backgroundColor ="transparent";
                search.style.width = "20vw";
                search.style.transition="width 20ms ease-in 0";
            }else{
                search.style.backgroundColor ="transparent";
                search.style.width = "10vw";
                search.style.transition="width 20ms ease-in 0";
            }
        })
    }
  }
  
  const mql = window.matchMedia("(max-width: 868px)");
  mql.addListener(searchViewportChange);
  searchViewportChange(mql);

// search.addEventListener("click", function(){
//     if(search.style.width ==="10vw"){
//         search.style.backgroundColor ="#a9b7c7";
//         search.style.width = "20vw";
//         search.style.transition="width 20ms ease-in 0";
//     }else{
//         search.style.backgroundColor ="#a9b7c7";
//         search.style.width = "10vw";
//         search.style.transition="width 20ms ease-in 0";
//     }
// })



// cate1.addEventListener("mouseover")