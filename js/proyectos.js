//     Obrengo contenedor desde webshop.html
var papel = document.getElementById("visible_page");
const get = document.location.search;

//     Obtengo elementos del menu 
var menu = {
    tradicional: document.getElementById("tradiconal"),
    industrializadas: document.getElementById("industrializadas"),
}

//     Declaro urls de clases
var requestPageUrl = {
    tradicional: "proyectos_pages/tradicional.html",
    industrializadas: "proyectos_pages/industrializadas.html",
};

//     Peticion http al servidor para q devuelva el archivo "/proyectos_pages/..." depende del argumento pasado en bloques anteriores.
function mostrar(page) {
    if (page == 'proyectos_pages/tradicional.html') {
        menu.tradicional.classList.add("active");
        menu.industrializadas.classList.remove("active");
    } else if (page  == 'proyectos_pages/industrializadas.html') {
        menu.industrializadas.classList.add("active");
        menu.tradicional.classList.remove("active");
    }

    var req = new XMLHttpRequest();          
    req.open('GET', page, false); 
    req.send(null);

    // Inserta en el index la pagina requerida + div que aporta efecto de aparición suave
    papel.innerHTML = `<div class="resp_page">${req.responseText}</div>`;
}

//vista segun parametro enviado por get

if (get == '?tradicional' || get == '') {
    mostrar(requestPageUrl.tradicional); 
} else if( get == '?industrializadas') {
    mostrar(requestPageUrl.industrializadas); 
}

//     Detecto evento de click sobre menu
menu.tradicional.addEventListener("click", function (){ 
    mostrar(requestPageUrl.tradicional);
});
menu.industrializadas.addEventListener("click", function (){ 
    mostrar(requestPageUrl.industrializadas);
});

