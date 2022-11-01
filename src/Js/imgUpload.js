const images = document.querySelector(".add-img");

export function imageUploader(files) {
    const imageList = [];
    for (let file of files) {
      const fileReader = new FileReader();
  
      fileReader.onloadend = (e) => {
        const { result } = e.target;
        const img = document.createElement("img");
        img.setAttribute("src", result);
  
        imageList.push({ fileName: file.name, result });
  
        localStorage.setItem("imageSlides", JSON.stringify(imageList));
      };
    }
  }