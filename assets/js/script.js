
window.onload = function() {
    document.querySelector(".menu-bars").addEventListener("click", function() {
        if(document.querySelector(".menu nav").style.display == 'flex') {
               document.querySelector(".menu nav").style.display = 'none'; 
        } else {
            document.querySelector(".menu nav").style.display = 'flex';
        }
    });
};