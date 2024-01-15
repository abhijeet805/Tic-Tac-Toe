let registration=document.querySelector('.registration');
let name1=document.querySelector('.name1');
let name2=document.querySelector('.name2');
const start=document.querySelector('.start');
let register_btn=document.querySelector('.register-btn');

start.addEventListener('click',(()=>{
     
    registration.classList.add("hide");
}));

register_btn.addEventListener('click',()=>{
    registration.classList.remove("hide");
});
