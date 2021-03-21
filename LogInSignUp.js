window.onscroll = function(){
    AddOrRemove()
};

var Nav = document.getElementById("EjNav");
var NavPosition = Nav.offsetTop;

function AddOrRemove(){
    if(window.pageYOffset >= NavPosition){
        Nav.classList.add("Paste");
    }
    else{
        Nav.classList.remove("Paste");
    }
}



document.getElementById("BtnRegistrarse").addEventListener("click",register);
document.getElementById("BtnIniciarSesion").addEventListener("click",IniciarSesion);
window.addEventListener("resize", AnchoPagina);


var ContenedorLoginRegistro=document.querySelector(".ContenedorLoginRegistro");

var FormularioLogin=document.querySelector(".FormularioLogin");
var FormularioRegistro=document.querySelector(".FormularioRegistro");

var CajaTraseraLogin=document.querySelector(".CajaTraseraLogin"); 
var CajaTraseraRegistro=document.querySelector(".CajaTraseraRegistro");
  

function AnchoPagina(){
    if(window.innerWidth>850){
        CajaTraseraLogin.style.display="block";
        CajaTraseraRegistro.style.display="block";
    }
    else{
        CajaTraseraRegistro.style.display="block";
        CajaTraseraRegistro.style.opacity="1";
        CajaTraseraLogin.style.display="none";
        FormularioLogin.style.display="block";
        FormularioRegistro.style.display="none"; 
        ContenedorLoginRegistro.style.left="0px";
    }
}
AnchoPagina();

function IniciarSesion(){ 
     
    if(window.innerWidth>850){
        FormularioRegistro.style.display="none";
        ContenedorLoginRegistro.style.left="10px";
        FormularioLogin.style.display="block";
        CajaTraseraRegistro.style.opacity="1";
        CajaTraseraLogin.style.opacity="0";
    }
    else{
        FormularioRegistro.style.display="none";
        ContenedorLoginRegistro.style.left="0px";
        FormularioLogin.style.display="block";
        CajaTraseraRegistro.style.display="block";
        CajaTraseraLogin.style.display="none";
    }
 }


function register(){ 
   // alert("Hello");
   // CajaTraseraRegistro.style.display="block";
   // ContenedorLoginRegistro.style.left ="410px";
    if(window.innerWidth>850){
        FormularioRegistro.style.display="block";
        ContenedorLoginRegistro.style.left="410px";
        FormularioLogin.style.display="none";
        CajaTraseraRegistro.style.opacity="0";
        CajaTraseraLogin.style.opacity="1";
    }
    else{
        FormularioRegistro.style.display="block";
        ContenedorLoginRegistro.style.left="0px";
        FormularioLogin.style.display="none";
        CajaTraseraRegistro.style.display="none";
        CajaTraseraLogin.style.display="block";
        CajaTraseraLogin.style.opacity="1";
    }
    
}