var userSelected={
    client:'',
    NIP:'',
    AccNum:'',
    saldo:'',
    uImg:'',
};

const textUser = document.querySelector('#textUser'); //Usuario actual
const userPhoto = document.querySelector('#userPhoto'); //Usuario actual
const userNA = document.querySelector('#userNA'); //Usuario actual
const logOutBtn=document.querySelector('#logOut')

//Variables movimientos
const inputIngresar=document.querySelector('#inputIngresar');
const inputRetirar=document.querySelector('#inputRetirar');
const ingresarForm=document.querySelector('#form-ingresarMonto');
const retirarForm=document.querySelector('#form-retirarMonto');

//Code Dan

const dateTime = document.querySelector('#date')
const optionSelected = document.querySelector('#optionSelected')
const textoBefore = document.querySelector('#textoBefore')
const amountBefore = document.querySelector('#amountBefore')
const textoAfter = document.querySelector('#textoAfter')
const amountAfter = document.querySelector('#amountAfter')

// Función que obtiene la fecha y hora actual
function getDate() {
    const fecha = new Date();
    let hora = fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds();
    return fecha.toDateString() + " | " + hora;
}
//datos cod-crub
mostrarData();

function add(){
    localStorage.setItem('cuentas', JSON.stringify(userSelected));
}
function getData(){
    userSelected=JSON.parse(localStorage.getItem('cuentas'));
    
}
function logOut(){
    localStorage.clear();

}

//Funcion cerrar sesión
logOutBtn.addEventListener('click', ()=>{
    logOut();
    location.href="./index.html";
})

//Funcion mostrar informacion del usuario en pantalla
function mostrarData(){
    getData();
    textUser.textContent='Bienvenido, ' + userSelected.client;
    userPhoto.src=userSelected.uImg;
    userNA.textContent='Numero de Cuenta: ' + userSelected.AccNum;
}
// Función que consulta los datos consultados del usuario en uso
function consultarSaldo() {
    dateTime.textContent = getDate()
    optionSelected.textContent = "Informacion de tus movimientos:"
    textoBefore.textContent = "Saldo Disponible: "
    amountBefore.textContent = `$${dataUser.saldo}`
    textoAfter.textContent = ""
    amountAfter.textContent = ""
}