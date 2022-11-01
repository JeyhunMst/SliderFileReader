const popup=document.querySelector(".popup");
const sliderImg=document.querySelector(".slider img")

export function popUp(imagesGalery){
    imagesGalery.forEach((imag)=>{
        
        imag.addEventListener("click",function(e){
            e.preventDefault();
            let bigImage=this.getAttribute("href");
            console.log(sliderImg);
            sliderImg.setAttribute("src",bigImage);
            popup.style.display="block";        
        })
    });
}

export function removePopUp(){
    document.addEventListener("click",(e)=>{
        if (e.target.classList.contains("inner") || e.target.classList.contains("popup")) {
            popup.style.display="none";
        }
    });
}