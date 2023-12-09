alert ("¡Bienvenido a Pompo Cerámica!");

let nombre = prompt ("Ingrese su nombre");
let apellido = prompt ("Ingrese su apellido");
if(nombre != "" && apellido != "") {
    alert (`Hola ${nombre} ${apellido}, esperamos poder ayudarte a encontrar lo que estas buscando!`);
}else{
    alert ("Debes ingresar tu nombre y apellido")
};

let seleccion = prompt("En Pompo Ceramica contamos con la siguiente linea de productos. Ingrese el numero por cual desea consultar: \n 1) Taza Pompo \n 2) Cenicero Flor \n 3) Porta Sahumerio");

const valor = (seleccion) => {
    switch (seleccion) {
        case "1":
            return 4000;
            
        case "2":
            return 4500;
            
        case "3":
            return 3500;
            
        default:
            return "Ingrese una opcion";
    }
};

let costo = valor(seleccion);

const producto = (seleccion) => {
    switch (seleccion) {
        case "1":
            return "Taza Pompo";
            
        case "2":
            return "Cenicero Flor";
            
        case "3":
            return "Porta Sahumerio";
            
        default:
            return "Ingrese una opcion";
    }
};

let consulta = producto(seleccion);

let tresCuotas = costo + (costo * 0.3);
let seisCuotas = costo + (costo * 0.6);
let doceCuotas = costo + (costo * 0.9);

alert(`Ha seleccionado ${consulta}, el costo del producto en contado efectivo o débito es de $ ${costo}. Si realiza la compra con tarjeta de crédito las opciones son: \n \n 3 cuotas: ${tresCuotas} \n \n 6 cuotas: ${seisCuotas} \n \n 12 cuotas: ${doceCuotas}`);



