window.onscroll=function(){myfunction()};

function myfunction(){
    let header=document.getElementById("header2")
    let button=document.getElementById("back-to-top")
    
if (document.body.scrollTop >= 450 || document.documentElement.scrollTop > 450  )
{
 header.style.display="flex";
 header.style.position="fixed";
} 
 else {
 header.style.display="none"
}

if( document.body.scrollTop >= 300 || document.documentElement.scrollTop > 300 )
{
button.style.display="block"
}
else{
    button.style.display="none"
}
}

// -----------------------------burger menu function

let BGmenu=document.getElementById("BG_nav_menu")
let BGicon=document.getElementById("BG_icon")
BGicon.addEventListener("click",function(){
    BGicon.classList.toggle("change")
    BGmenu.classList.toggle("move_BG_menu")
})