// Mostrar / ocultar contraseña
function verPassword(id, icono) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// Guardar y mostrar mensajes
document.getElementById("formulario").addEventListener("submit", function(e){
  e.preventDefault();

  const mensaje = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    pais: document.getElementById("pais").value,
    gusto: document.getElementById("gusto").value,
    mejorar: document.getElementById("mejorar").value,
    fecha: new Date().toLocaleString()
  };

  let mensajes = JSON.parse(localStorage.getItem("mensajesPagina")) || [];
  mensajes.push(mensaje);
  localStorage.setItem("mensajesPagina", JSON.stringify(mensajes));

  console.clear();
  console.log("📩 MENSAJES ENVIADOS DESDE LA PÁGINA");
  console.table(mensajes);

  alert("Mensaje enviado correctamente ✅");
  this.reset();
});
