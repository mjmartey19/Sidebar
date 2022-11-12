const menuBar = document.querySelector(".bx-menu");
const  text = document.querySelectorAll(".text"),
title = document.querySelector(".title"),
icon = document.querySelectorAll(".icon"),
sidebar = document.querySelector(".sidebar");
buttons =  document.querySelectorAll(".link a"),
menuBar.addEventListener("click", ()=>{
  sidebar.classList.toggle('toggle');
})

buttons.forEach((button,index) => {
  button.addEventListener('click', (e)=>{
    e.preventDefault();
    button.classList.add('active');
    removeActive(index);
  })
});

function removeActive(index1){
  buttons.forEach((button,index2)=>{
    if(index1 != index2){
      button.classList.remove('active');
    }
  })
}

