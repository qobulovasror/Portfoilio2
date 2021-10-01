let mediaMenu = document.querySelector('.media-menu');

function menyu(){
    if(mediaMenu.style.display=='none'){
        mediaMenu.style.display='block';
        document.querySelector('.bx-menu').style.display="none";
        document.querySelector('.bx-x').style.display="block";
    }
    else{

        mediaMenu.style.display='none';
        document.querySelector('.bx-menu').style.display="block";
        document.querySelector('.bx-x').style.display="none";
    }
}
 
let skillRow=document.querySelector("#skill .row");
let skillRowCurson=-310;
function rowtr(element){
    if(element.className=="bx bxs-right-arrow-alt")
    {
        if(skillRowCurson!=-620)
        {
            skillRowCurson-=310;
            skillRow.style.transform=`translateX(${skillRowCurson}px)`;
        }
    }
    else{
        if(skillRowCurson!=0)
        {
            skillRowCurson+=310;
            skillRow.style.transform=`translateX(${skillRowCurson}px)`;
        }
    }
}

let portfimg=document.querySelector(".portf-img");
let portfimg1=document.querySelector(".portfimg1");
let portfimg2=document.querySelector(".portfimg2");
let portfimg3=document.querySelector(".portfimg3");
function portimg(element) {
    portfimg.style.display="block";
    if(element.className=="img1")
    {
        portfimg1.style.display="block";
    }
    else {
        if(element.className=="img2"){
            portfimg2.style.display="block";
        }
        else{
            portfimg3.style.display="block";
        }
    }
}
function cancel(){
    portfimg.style.display="none";
    portfimg1.style.display="none";
    portfimg2.style.display="none";
    portfimg3.style.display="none";

}