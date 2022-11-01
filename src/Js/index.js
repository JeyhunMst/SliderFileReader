
import { popUp,removePopUp } from "./popup.js";
import { imageUploader,showImage } from "./imgUpload.js";

//Global variables
const imagesGalery=document.querySelectorAll(".galery a");
const uploadIcon = document.querySelector(".add-img i");
const inputFile = document.querySelector(".add-img input");


//File input
uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
  });
inputFile.addEventListener("change", function (e) {
    const { files } = e.target;
  
    imageUploader(files);
  });

//Show images
const images=JSON.parse(localStorage.getItem("imageSlides"));
showImage(images)
//Popup
popUp(imagesGalery);
removePopUp();

