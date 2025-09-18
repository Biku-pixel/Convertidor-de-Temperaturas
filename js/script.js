function convertir() {
    if (validar()) {
        let c = document.getElementById("txt-c");
        let f = document.getElementById("fa");
        let k = document.getElementById("ke");
        let r = document.getElementById("ra");

        f.textContent = c_fa(c.value);
        k.innerText = c_ke(c.value);
        r.innerHTML = c_ra(c.value);//toma en cuenta las etiquetas html
    }

}
function c_fa(c) {
    return ((9 * c) / 5) + 32;
}
//funcion reducida
let c_ke = (c) => c_ra(c) - 187;
//funcion anonima
let c_ra = function (c) {
    return c + 460;
}

function validar() {
    let c = document.getElementById("txt-c");
    //si esta vacio 
    if (c.value == "") {
        alert("que hace vos ingrese algo no es adivino");
        c.focus();
        return false;
    }
    //no permite texto
    if(isNaN(c.value)){
        alert("es para mates no para publicar");
        c.value="";
        c.focus();
        return false;
    }
    return true;
}