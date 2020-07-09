var boton_servicio1 = document.getElementById("boton_servicio1"), 
    boton_servicio2 = document.getElementById("boton_servicio2"),
    servicios__container__1 = document.getElementById("servicios__container__1"),
    servicios__container__2 = document.getElementById("servicios__container__2");

var muestraServicio1 = () => {
    let servicio1__icon = document.getElementById("servicio1__icon");

    servicio2__icon.classList.replace("icon-secondary","icon-primary");

    if (servicios__container__1.style.display == "block") {
        servicios__container__1.style.display = "none";
        boton_servicio1.classList.remove("servicioSeleccionado");
        servicio1__icon.classList.replace("icon-secondary","icon-primary");
    } else {
        servicios__container__1.style.display = "block";
        boton_servicio1.classList.add("servicioSeleccionado");
        boton_servicio2.classList.remove("servicioSeleccionado");
        servicios__container__2.style.display = "none";
        servicios__container__1.classList.add("animate__slideInLeft");
        servicio1__icon.classList.replace("icon-primary","icon-secondary");
    }
    
}
var muestraServicio2 = () => {
    let servicio2__icon = document.getElementById("servicio2__icon");

    servicio1__icon.classList.replace("icon-secondary","icon-primary");

    if (servicios__container__2.style.display == "block") {
        servicios__container__2.style.display = "none";
        boton_servicio2.classList.remove("servicioSeleccionado");
        servicio2__icon.classList.replace("icon-secondary","icon-primary");
    } else {
        servicios__container__2.style.display = "block";
        boton_servicio2.classList.add("servicioSeleccionado");
        boton_servicio1.classList.remove("servicioSeleccionado");
        servicios__container__1.style.display = "none";
        servicios__container__2.classList.add("animate__slideInRight");
        servicio2__icon.classList.replace("icon-primary","icon-secondary");
    }
}

// vista por defecto
muestraServicio1();
// escucho cambios en botones
boton_servicio1.addEventListener("click", muestraServicio1);
boton_servicio2.addEventListener("click", muestraServicio2);