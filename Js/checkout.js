// Escuchar el evento de envío del formulario
document.getElementById('formulario-checkout').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // Aquí puedes realizar cualquier validación del formulario

    // Por ahora, solo mostraremos una alerta con los datos ingresados
    alert(`Pedido realizado por ${nombre} (${email})`);
});
