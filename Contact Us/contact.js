let button=document.querySelector(".enquiry");
let form_display=document.querySelector(".contact-form-off-display");
let button2=document.querySelector(".btn");
button.addEventListener('click',()=>{
    form_display.classList.remove("contact-form-off-display");
    form_display.classList.add("contact-form-display");

})

button2.addEventListener('click',()=>{
    form_display.classList.add("contact-form-off-display");
})