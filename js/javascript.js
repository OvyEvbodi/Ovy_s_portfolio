function openNav(){
    document.getElementById("nav_mobile").style.width = "50%";
    document.getElementById("open").style.opacity = "0";
}
function closeNav(){
    document.getElementById("nav_mobile").style.width = "0%";
    document.getElementById("open").style.opacity = "1";
}
document.querySelectorAll('a').addEventListener('click', closeNav());