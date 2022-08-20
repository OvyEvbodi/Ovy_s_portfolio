const mobileLink = document.querySelectorAll(".mob_nav_link");
document.getElementById("open").addEventListener('click', function(){
    document.getElementById("nav_mobile").style.width = "80vw";
    document.getElementById("close").style.display = "block";
    document.getElementById("open").style.display = "none";
})
document.getElementById("close").addEventListener('click', function(){
    document.getElementById("nav_mobile").style.width = "0%";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";

})

mobileLink.forEach(link =>{
    link.addEventListener('click', () =>{
        document.getElementById("nav_mobile").style.width = "0%";
        document.getElementById("close").style.display = "none";
        document.getElementById("open").style.display = "block";
    })
})
//end of mobile nav commit.................................//
