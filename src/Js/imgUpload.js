
const galeryRow=document.querySelector(".galery-row");

export function imageUploader(files) {
    const imageList = [];
    for (let file of files) {
      const fileReader = new FileReader();
      fileReader.onloadend = (e) => {
        const { result } = e.target;
        imageList.push({ fileName: file.name, result });
        localStorage.setItem("imageSlides", JSON.stringify(imageList));
      };
      
      fileReader.readAsDataURL(file);
    }
  }



export function showImage(array){
       array.forEach(element => {
        console.log(element.result);
        galeryRow.innerHTML+=`
        <div class="col-4">
            <a href=${element.result}>
                <img src=${element.result} class="cat-img">
            </a>
        </div>
        `
       });
}