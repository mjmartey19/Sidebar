const menuBar = document.querySelector(".bx-menu");
const  text = document.querySelectorAll(".text"),
title = document.querySelector(".title"),
icon = document.querySelectorAll(".icon"),
 sidebar = document.querySelector(".sidebar");
menuBar.addEventListener("click", ()=>{
  sidebar.classList.toggle('active');
})


var viewMode = getCookie("view-mode");
if(viewMode == "desktop"){
    viewport.setAttribute('content', 'width=1024');
}else if (viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}var viewMode = getCookie("view-mode");
if(viewMode == "desktop"){
    viewport.setAttribute('content', 'width=1024');
}else if (viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}
