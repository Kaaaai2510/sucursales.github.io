function seleccionarSucursal() {
    const sucursalSeleccionada = document.getElementById("sucursal").value;
    if (sucursalSeleccionada === "llevar") {
        // Redirecciona a la página de Menu.html si se selecciona "Para llevar"
        window.location.href = "Menu.html";
    } else {
        // Redirecciona a la página de Mesas.html con el parámetro "sucursal"
        window.location.href = `Mesas.html?sucursal=${sucursalSeleccionada}`;
    }
}
