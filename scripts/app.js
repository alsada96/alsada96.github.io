//variables login
const userName=document.querySelector('#userName');
const ingresar=document.querySelector('#login');
const formUser=document.querySelector('#form-user');
// const inputEmail=document.querySelector('#inputEmail');
const inputPassword=document.querySelector('#inputPassword');
const datosForm={
    NIP: ''
};

//variables user
const user1=document.querySelector('#user1');
const user2=document.querySelector('#user2');
const user3=document.querySelector('#user3');
const userSelected={
    client:'',
    NIP: '',
    AccNum: '',
    saldo: '',
    uImg: '',
};

//Variable mensaje de error
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div> <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg> ${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

user1.addEventListener('click', () =>{
    dataUserSelected(1);
});
user2.addEventListener('click', () =>{
    dataUserSelected(2);
})
user3.addEventListener('click', () =>{
    dataUserSelected(3);
})

//Datos del usuario seleccionado
function dataUserSelected(n){
    cuentas.forEach(cuenta => {
        const {client, NIP, Value, AccNum, saldo, uImg} = cuenta;
        if(Value==n){
            userSelected.client=client;
            userSelected.NIP=NIP;
            userSelected.AccNum=AccNum;
            userSelected.saldo=saldo;
            userSelected.uImg=uImg;
        }
    })
    userName.textContent=userSelected.client;
    console.log(userSelected);
}

//Validación de login
formUser.addEventListener('submit', (e) =>{
    e.preventDefault();
    datosForm.NIP=inputPassword.value;

    console.log(datosForm);

    if(datosForm.NIP==userSelected.NIP){
        add();
        location.href="users.html";
    }
    else if(datosForm.NIP==''){
        alert('NIP es un campo requerido.', 'warning');
    }
    else{
        alert('NIP incorrecto.', 'danger');
    }
})

//Funciones local storage
function add(){
    localStorage.setItem('cuentas', JSON.stringify(userSelected));
}
// function getData(){
//     userSelected=JSON.parse(localStorage.getItem('users'));
// }
// function clear(){
//     localStorage.clear();
// }

// /////////////// Apartir de ahora se trabaja con LocalStorage solamente//////////////////

// //Funcion mostrar informacion del usuario en pantalla
// function mostrarData(){
//     getData();
//     saldo.textContent=userSelected.saldo;
//     console.log(userSelected);
// }