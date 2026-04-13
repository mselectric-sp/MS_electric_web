if(localStorage.getItem("cookiesAceptadas")){
    document.getElementById("cookies").style.display="none"
    }
    
    function aceptarCookies(){
    
    localStorage.setItem("cookiesAceptadas","true")
    
    document.getElementById("cookies").style.display="none"
    
}

const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje-exito");

form.addEventListener("submit", async function(e){
  e.preventDefault();

  const data = new FormData(form);

  // 👉 Añadir hora local de España
  const ahora = new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid"
  });
  data.append("hora_local", ahora);

  const response = await fetch("https://formspree.io/f/mojyapoa", {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if(response.ok){
    form.reset();
    mensaje.style.display = "block";
  } else {
    alert("Hubo un error, inténtalo de nuevo");
  }
  form.style.display = "none";
});