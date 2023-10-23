let inp = document.getElementById("file_upload");
let upload_photo = document.getElementsByClassName("upload_photo")[0];

inp.addEventListener('input', () => {
    const fileList = inp.files;
    
    while (upload_photo.firstChild) {
        upload_photo.removeChild(upload_photo.firstChild);
    }

    if (fileList.length > 0) {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(fileList[0]);
        upload_photo.appendChild(img);
    }
});