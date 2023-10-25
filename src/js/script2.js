const studentRadio = document.querySelector("#STUDENT");
const employeeRadio = document.querySelector("#EMPLOYEE");
const emplBlock = document.querySelector("#employee-block");
const studBlock = document.querySelector("#student-block");
const educationLabels = document.querySelectorAll(".main-body__registration__form__text-input__education__multi_choise__label");
const educationLabelsDone = document.querySelector(".main-body__registration__form__text-input__education__multi_choise__label-done");
const img_done_div = educationLabelsDone.querySelector("#ed_done_img");
const img_done = img_done_div.querySelector("img");
const education_info = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__card-info");
const grade_dropdowns = document.querySelectorAll(".main-body__registration__form__text-input__education__grade");
const faculty_dropdowns = document.querySelectorAll(".main-body__registration__form__text-input__education__faculty");
const op_dropdowns = document.querySelectorAll(".main-body__registration__form__text-input__education__op");
const work_std = document.querySelector("#work_std");
const work_empl = document.querySelector("#work_empl");
const work_year = document.querySelector("#work_year");

studentRadio.addEventListener("change", () => {
    emplBlock.style.display = "none";
    studBlock.style.display = "block";
});

employeeRadio.addEventListener("change", () => {
    emplBlock.style.display = "block";
    studBlock.style.display = "none";
});


educationLabels.forEach(label => {
    const input = label.querySelector("input[type='radio']");
    
    label.addEventListener("click", () => {
        educationLabels.forEach(label => {
            label.style.backgroundColor = "";
            label.style.color = "#000"
            img_done.src = "./icons/Rectangle.svg"
            img_done_div.style.backgroundColor = "#fff";
        });

        label.style.backgroundColor = "#7953c3";
        label.style.borderRadius = "8px";
        label.style.color = "#fff"; 
    
        let ptextEdu= document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu");
        if(ptextEdu === null){
            ptextEdu = document.createElement("p");
            ptextEdu.classList.add("main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu");
            let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__grade");
            existingDiv.parentNode.replaceChild(ptextEdu, existingDiv);
        }
        ptextEdu.textContent = input.value + " курс,";
    });
});

educationLabelsDone.addEventListener("click", () =>{
    let input = document.querySelector(".main-body__registration__form__text-input__education__multi_choise__input-done");
    img_done.src = "./icons/done.svg";
    img_done_div.style.backgroundColor = "#6b39cb";
    img_done_div.style.width = "16px";
    img_done_div.style.height = "16px";
    img_done_div.style.borderRadius = "3px";
    img_done_div.style.display = "flex";
    img_done_div.style.justifyContent = "center";

    educationLabels.forEach(label => {
        label.style.backgroundColor = "";
        label.style.color = "#000"  
    });

    let ptextEdu= document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu");
    if(ptextEdu === null){
        ptextEdu = document.createElement("p");
        ptextEdu.classList.add("main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu");
        let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__grade");
        existingDiv.parentNode.replaceChild(ptextEdu, existingDiv);
    }
    ptextEdu.textContent = input.value + ",";
});

grade_dropdowns.forEach(grade_dropdown => {
    const grade_select = grade_dropdown.querySelector(".main-body__registration__form__text-input__education__grade__select")
    const grade_selected = grade_dropdown.querySelector(".main-body__registration__form__text-input__education__grade__selected")
    const grade_caret = grade_dropdown.querySelector(".main-body__registration__form__text-input__education__grade__caret")
    const grade_menu = grade_dropdown.querySelector(".main-body__registration__form__text-input__education__grade__menu")
    const grade_options = grade_dropdown.querySelectorAll(".main-body__registration__form__text-input__education__grade__menu li")
    
    grade_select.addEventListener("click", () =>{
        grade_caret.classList.toggle("main-body__registration__form__text-input__education__grade__caret-rotate");
        grade_menu.classList.toggle("main-body__registration__form__text-input__education__grade__menu-open");
    });
    
    grade_options.forEach(grade_option => {
        grade_option.addEventListener("click", () => {
            grade_selected.innerText = grade_option.innerText;
            
            let ptextEduGr= document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu-grade");
            if(ptextEduGr === null){
                ptextEduGr = document.createElement("p");
                ptextEduGr.classList.add("main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu-grade");
                let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__edu-grade-div");
                existingDiv.parentNode.replaceChild(ptextEduGr, existingDiv);
            }
            ptextEduGr.innerText = grade_option.innerText;
            grade_selected.style.color = "#040013";
            grade_caret.classList.remove("main-body__registration__form__text-input__education__grade__caret-rotate");
            grade_menu.classList.toggle("main-body__registration__form__text-input__education__grade__menu-open");
            grade_options.forEach(grade_option => {
                grade_option.classList.remove("main-body__registration__form__text-input__education__grade__active");
            });
            grade_option.classList.add("main-body__registration__form__text-input__education__grade__active");
        });
    });    
});

faculty_dropdowns.forEach(faculty_dropdown => {
    const faculty_select = faculty_dropdown.querySelector(".main-body__registration__form__text-input__education__faculty__select")
    const faculty_selected = faculty_dropdown.querySelector(".main-body__registration__form__text-input__education__faculty__selected")
    const faculty_caret = faculty_dropdown.querySelector(".main-body__registration__form__text-input__education__faculty__caret")
    const faculty_menu = faculty_dropdown.querySelector(".main-body__registration__form__text-input__education__faculty__menu")
    const faculty_options = faculty_dropdown.querySelectorAll(".main-body__registration__form__text-input__education__faculty__menu li")
    
    faculty_select.addEventListener("click", () =>{
        faculty_caret.classList.toggle("main-body__registration__form__text-input__education__faculty__caret-rotate");
        faculty_menu.classList.toggle("main-body__registration__form__text-input__education__faculty__menu-open");
    });
    
    faculty_options.forEach(faculty_option => {
        faculty_option.addEventListener("click", () => {
            faculty_selected.innerText = faculty_option.innerText;
            
            let ptextEduFc= document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu-faculty");
            if(ptextEduFc === null){
                ptextEduFc = document.createElement("p");
                ptextEduFc.classList.add("main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu-faculty");
                let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__edu-faculty-div");
                existingDiv.parentNode.replaceChild(ptextEduFc, existingDiv);
            }
            ptextEduFc.innerText = faculty_option.innerText;
            faculty_selected.style.color = "#040013";
            faculty_caret.classList.remove("main-body__registration__form__text-input__education__faculty__caret-rotate");
            faculty_menu.classList.toggle("main-body__registration__form__text-input__education__faculty__menu-open");
            faculty_options.forEach(faculty_option => {
                faculty_option.classList.remove("main-body__registration__form__text-input__education__faculty__active");
            });
            faculty_option.classList.add("main-body__registration__form__text-input__education__faculty__active");
        });
    });    
});

op_dropdowns.forEach(op_dropdown => {
    const op_select = op_dropdown.querySelector(".main-body__registration__form__text-input__education__op__select")
    const op_selected = op_dropdown.querySelector(".main-body__registration__form__text-input__education__op__selected")
    const op_caret = op_dropdown.querySelector(".main-body__registration__form__text-input__education__op__caret")
    const op_menu = op_dropdown.querySelector(".main-body__registration__form__text-input__education__op__menu")
    const op_options = op_dropdown.querySelectorAll(".main-body__registration__form__text-input__education__op__menu li")
    
    op_select.addEventListener("click", () =>{
        op_caret.classList.toggle("main-body__registration__form__text-input__education__op__caret-rotate");
        op_menu.classList.toggle("main-body__registration__form__text-input__education__op__menu-open");
    });
    
    op_options.forEach(op_option => {
        op_option.addEventListener("click", () => {
            op_selected.innerText = op_option.innerText;
            
            let ptextEduOp= document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu-op");
            if(ptextEduOp === null){
                ptextEduOp = document.createElement("p");
                ptextEduOp.classList.add("main-body__registration__form__profile-create-card__data__card-text-side__ptext-edu-op");
                let existingDiv = document.querySelector(".main-body__registration__form__profile-create-card__data__card-text-side__edu-op-div");
                existingDiv.parentNode.replaceChild(ptextEduOp, existingDiv);
            }
            ptextEduOp.innerText = op_option.innerText;
            op_selected.style.color = "#040013";
            op_caret.classList.remove("main-body__registration__form__text-input__education__op__caret-rotate");
            op_menu.classList.toggle("main-body__registration__form__text-input__education__op__menu-open");
            op_options.forEach(op_option => {
                op_option.classList.remove("main-body__registration__form__text-input__education__op__active");
            });
            op_option.classList.add("main-body__registration__form__text-input__education__op__active");
        });
    });    
});

work_std.addEventListener("input", () => {
    let ptextWork = document.querySelector(".main-body__registration__form__profile-create-card__data__work_ptext");
    if(ptextWork === null)
    {
        ptextWork = document.createElement("p");
        ptextWork.classList.add("main-body__registration__form__profile-create-card__data__work_ptext");
        let prnt = document.querySelector(".main-body__registration__form__profile-create-card__data__work");
        prnt.insertBefore(ptextWork, prnt.firstChild);
    }
    ptextWork.innerText = work_std.value
});

work_empl.addEventListener("input", () => {
    let ptextWork = document.querySelector(".main-body__registration__form__profile-create-card__data__work_ptext");
    if(ptextWork === null)
    {
        ptextWork = document.createElement("p");
        ptextWork.classList.add("main-body__registration__form__profile-create-card__data__work_ptext");
        let prnt = document.querySelector(".main-body__registration__form__profile-create-card__data__work");
        prnt.insertBefore(ptextWork, prnt.firstChild);
    }

    ptextWork.innerText = work_empl.value
});

work_year.addEventListener("input", () => {
    let ptextWork = document.querySelector(".main-body__registration__form__profile-create-card__data__work_ptext_date");
    if(ptextWork === null)
    {
        ptextWork = document.createElement("p");
        ptextWork.classList.add("main-body__registration__form__profile-create-card__data__work_ptext_date");
        document.querySelector(".main-body__registration__form__profile-create-card__data__work").appendChild(ptextWork);
    }
    ptextWork.innerText = "С " + work_year.value.split('-')[0] + " года";
});