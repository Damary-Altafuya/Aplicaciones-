function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("teléfono").value;
    var email = document.getElementById("email").value;
    var fechaInicio = document.getElementById("fecha_inicio").value;
    var fechaFin = document.getElementById("fecha_fin").value;

    // Validar que los campos no estén vacíos
    if (nombre.trim() === "" || apellido.trim() === "" || telefono.trim() === "" || email.trim() === "" || fechaInicio === "" || fechaFin === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }

    // Validar formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return false;
    }

    // Si todas las validaciones pasan, se enviará el formulario
    return true;
  }