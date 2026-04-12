if(localStorage.getItem("cookiesAceptadas")){
    document.getElementById("cookies").style.display="none"
    }
    
    function aceptarCookies(){
    
    localStorage.setItem("cookiesAceptadas","true")
    
    document.getElementById("cookies").style.display="none"
    
}