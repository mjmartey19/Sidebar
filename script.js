const menuBar = document.querySelector(".bx-menu");
const  text = document.querySelectorAll(".text"),
title = document.querySelector(".title"),
icon = document.querySelectorAll(".icon"),
 sidebar = document.querySelector(".sidebar");
menuBar.addEventListener("click", ()=>{
  sidebar.classList.toggle('active');
})