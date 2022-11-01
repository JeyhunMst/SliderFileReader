
import { popUp,removePopUp } from "./popup.js";
import { imgUpload } from "./imgUpload.js";

//Global variables
const imagesGalery=document.querySelectorAll(".galery a");
const uploadIcon = document.querySelector(".add-img i");
const inputFile = document.querySelector(".add-img input");
console.log(uploadIcon);
//File input
uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();
  });
  inputFile.addEventListener("change", function (e) {
    const { files } = e.target;
  
    imgUpload(files);
  });

//Popup
popUp(imagesGalery);
removePopUp();
