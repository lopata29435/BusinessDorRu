const picInput = document.querySelector("#file_upload");
const nameInput = document.querySelector("#name");
const radioButtons = document.querySelectorAll('input[name="gender"]');
const ageInput = document.querySelector("#year_of_birth");
const telInput = document.querySelector("#phone");
const tgInput = document.querySelector("#tg");
const aboutInput = document.querySelector("#about_ur_self");

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}

function postData(event) {
    event.preventDefault();
    const formData = new FormData(document.querySelector("#userProfileForm"));
    const csrftoken = getCookie('csrftoken');
    
    fetch('/myApp/registration/', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrftoken
        },
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.querySelector("#userProfileForm").reset();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function handleFileSelection() {
    let upload_photo = document.querySelector("#main-body__registration__form__data-upload__photo-block");
    let upload_photo_div = document.querySelector(".main-body__registration__form__data-upload__upload-photo");
    let upload_photo_card = document.querySelector(".main-body__registration__form__profile-create-card__data__card-photo-side__card-photo");

    const fileList = picInput.files;

    if (fileList.length > 0) {
        upload_photo_div.style.display = "none";

        let wrapper =  document.createElement('div');
        wrapper.classList.add("main-body__registration__form__data-upload__uploaded-photo");
        
        let img1 = document.createElement('img');
        img1.src = URL.createObjectURL(fileList[0]);
        img1.style.width = "200px";
        img1.style.height = "200px";
        img1.style.borderRadius = "16px";
        wrapper.appendChild(img1);
        
        let img2 = document.createElement('img');
        img2.src = URL.createObjectURL(fileList[0]);
        img2.style.width = "140px";
        img2.style.height = "140px";
        img2.style.borderRadius = "16px";
        upload_photo_card.style.border = "1px #cdbddb";
        upload_photo_card.appendChild(img2);

        let removeButton = document.createElement('div');
        removeButton.classList.add("main-body__registration__form__data-upload__uploaded-photo__remove-btn");
        let removeButtonImg = document.createElement('img');
        removeButtonImg.src = "../../static/myApp/icons/close.svg";
        removeButton.appendChild(removeButtonImg);
        wrapper.appendChild(removeButton);

        upload_photo.appendChild(wrapper);

        removeButton.addEventListener('click', () => {
            picInput.value = null;
            while (wrapper.firstChild) {
                wrapper.removeChild(wrapper.firstChild);
            }
            while (upload_photo_card.firstChild) {
                upload_photo_card.removeChild(upload_photo_card.firstChild);
            }
            wrapper.style.display = "none";
            upload_photo_div.style.display = "flex";
            upload_photo_card.style.border = "1px dashed #cdbddb";
        });
    }
}

function handleNameInput() {
    let inputString = nameInput.value;
    let label = document.querySelector('.main-body__registration__form__text-input__label[for="name"]');
    if(inputString.length === 0 || /[^A-Za-zА-Яа-я]/.test(inputString)) {
        nameInput.style.backgroundColor = "#fff2f2";
        nameInput.style.border = "1px solid #ff0000";
        nameInput.style.color = "#fb4c4c";
        label.style.color = "#ff0000";
    }
    else{
        nameInput.removeAttribute("style");
        nameInput.classList.add("main-body__registration__form__text-input__input");
        label.removeAttribute("style");
        label.classList.add("main-body__registration__form__text-input__label");
        
        
        let ptextName = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__ptext-name");
        if(ptextName){
            ptextName.textContent = inputString;
        }
        else{
            ptextName = document.createElement("p");
            ptextName.classList.add("main-body__registration__form__profile-create-card__data__card-text-side__ptext-name");
            ptextName.textContent = inputString;
            let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__div-name");
            existingDiv.parentNode.replaceChild(ptextName, existingDiv);
        }
    }
}

function handleAgeInput() {
    let dateValue = ageInput.value;
    let age = Math.floor((new Date() - new Date(dateValue))/ (1000 * 60 * 60 * 24 * 365.25));
    let ptextAge= document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__ptext-age");
    let label = document.querySelector('.main-body__registration__form__text-input__label[for="year_of_birth"]');

    if(age < 18 || age >= 130){
        ageInput.style.backgroundColor = "#fff2f2";
        ageInput.style.border = "1px solid #ff0000";
        ageInput.style.color = "#fb4c4c";
        label.style.color = "#ff0000";
    }
    else
    {
        ageInput.removeAttribute("style");
        ageInput.classList.add("main-body__registration__form__text-input__date");
        label.removeAttribute("style");
        label.classList.add("main-body__registration__form__text-input__label");
        if(ptextAge == null){
            ptextAge = document.createElement("p");
            ptextAge.classList.add("main-body__registration__form__profile-create-card__data__card-text-side__ptext-age");
            let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__div-age");
            existingDiv.parentNode.replaceChild(ptextAge, existingDiv);
        }
        ptextAge.textContent = age;
    }
    
}

function handleTelInput(){
    let telValue = telInput.value;
    const phonePattern = /^(?:\+\d{1,3}|8)[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/;
    let label = document.querySelector('.main-body__registration__form__text-input__label[for="phone"]');

    if(phonePattern.test(telValue)){
        telInput.removeAttribute("style");
        telInput.classList.add("main-body__registration__form__text-input__input");
        label.removeAttribute("style");
        label.classList.add("main-body__registration__form__text-input__label");
    }
    else{
        telInput.style.backgroundColor = "#fff2f2";
        telInput.style.border = "1px solid #ff0000"; 
        telInput.style.color = "#fb4c4c"; 
        label.style.color = "#ff0000";
    }
}

function handleTgInput(){
    let tgValue = tgInput.value;
    const pattern = /^[a-zA-Z0-9_]+$/;
    let label = document.querySelector('.main-body__registration__form__text-input__label[for="tg"]');

    if(tgValue.length === 0 || !pattern.test(tgValue)) {
        tgInput.style.backgroundColor = "#fff2f2";
        tgInput.style.border = "1px solid #ff0000";
        tgInput.style.color = "#fb4c4c";
        label.style.color = "#ff0000";
    }
    else{
        tgInput.removeAttribute("style");
        tgInput.classList.add("main-body__registration__form__text-input__input");
        label.removeAttribute("style");
        label.classList.add("main-body__registration__form__text-input__label");
    }    
}

function textareaTextHandler(aboutValue){
    const maxLineLength = 66;
    const lines = aboutValue.split('\n');
    const formattedLines = [];

    lines.forEach(line => {
        if (line.length > maxLineLength) {
            for (let i = 0; i < line.length; i += maxLineLength) {
                formattedLines.push(line.substr(i, maxLineLength));
            }
        } else {
            formattedLines.push(line);
        }
    });

    return formattedLines.join('\n');
}

function expandButtonHandler(expandButton, ptextAbout, aboutValue) {
    if (expandButton.firstChild.textContent == "Развернуть") {
        ptextAbout.innerText = textareaTextHandler(aboutValue);
        expandButton.firstChild.textContent = "Свернуть";
        expandButton.lastChild.style.transform = "rotate(180deg)";
    } else {
        ptextAbout.innerText = aboutValue.slice(0, 65) + "...";
        expandButton.firstChild.textContent = "Развернуть";
        expandButton.lastChild.style.transform = "rotate(0deg)";
    }
    expandButton.removeEventListener('click', expandButtonHandler);
}

function handleAboutInput(){
    let aboutValue = aboutInput.value
    let label = document.querySelector('.main-body__registration__form__text-input__label[for="about_ur_self"]');
    let ptextAbout= document.querySelector(".main-body__registration__form__profile-create-card__data__ptext-about-ur");
    let wrap =  document.querySelector(".main-body__registration__form__profile-create-card__data__about-ur_wrapper");


    if(aboutValue.length === 0) {
        aboutInput.style.backgroundColor = "#fff2f2";
        aboutInput.style.border = "1px solid #ff0000";
        aboutInput.style.color = "#fb4c4c";
        label.style.color = "#ff0000";
    }
    else{
        aboutInput.removeAttribute("style");
        aboutInput.classList.add("main-body__registration__form__text-input__textarea");
        label.removeAttribute("style");
        label.classList.add("main-body__registration__form__text-input__label");
        if(ptextAbout == null){
            ptextAbout = document.createElement("p");
            ptextAbout.classList.add("main-body__registration__form__profile-create-card__data__ptext-about-ur");
            let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__about-ur");
            existingDiv.parentNode.replaceChild(ptextAbout, existingDiv);
        }
        if(aboutValue.length > 65){
            ptextAbout.textContent = aboutValue.slice(0, 65) + "...";

            let expandButton = document.querySelector(".main-body__registration__form__data-upload__uploaded-photo__expand-btn");

            if( expandButton=== null){
                expandButton = document.createElement('div');
                expandButton.classList.add("main-body__registration__form__data-upload__uploaded-photo__expand-btn");
                let expandButtonTxt = document.createElement('p');
                expandButtonTxt.textContent = "Развернуть"
                expandButtonTxt.style.margin = "0"
                let expandButtonImg = document.createElement('img');
                expandButtonImg.src = "../../static//myApp/icons/expand.svg";
                expandButton.appendChild(expandButtonTxt);
                expandButton.appendChild(expandButtonImg);
                wrap.appendChild(expandButton);
            }

            expandButton.addEventListener('click', function() {
                expandButtonHandler(expandButton, ptextAbout, aboutValue);
            });
        }
        else{
            ptextAbout.innerText = aboutValue;
        }
    }    
}

picInput.addEventListener('change', handleFileSelection);
nameInput.addEventListener('input', handleNameInput);
radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener("change", function() {
      if (this.checked) {
          let ptextSex= document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__ptext-sex");
          if(ptextSex){
              ptextSex.textContent = this.value;
          }
          else{
              ptextSex = document.createElement("p");
              ptextSex.classList.add("main-body__registration__form__profile-create-card__data__card-text-side__ptext-sex");
              let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__div-sex");
              existingDiv.parentNode.replaceChild(ptextSex, existingDiv);
              ptextSex.textContent = this.value;
          }
      }
    });
});
ageInput.addEventListener('input', handleAgeInput);
telInput.addEventListener('input', handleTelInput);
tgInput.addEventListener('input', handleTgInput);
aboutInput.addEventListener('input', handleAboutInput);