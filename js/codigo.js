function cargarayuda(){
    var h3=document.getElementById("h3ayuda")
    h3.innerHTML="Ingrese con mayúsculas su nombre";
    }
    function cargarayuda2(control){
    var h3=document.getElementById("h3ayuda")
    h3.innerHTML="Ingrese con mayúsculas su apellido";

function preguntar()
{
    var vNombre=prompt("¿cual es tu nombre?");
    alert("Bienvenido"+vNombre);

}
function definirTitulo()
{
   var vTitulo=prompt("defina el titulo aqui");
   var vH1=document.getElementById ("TituloPrincipal");
   vH1.innerHTML=vTitulo;
}
function ModoOscuro()
{
     var vBody=document.getElementById ("cuerpo");
     vBody.style.background="gray";
    

}
function ModoClaro()
{
var vBody=document.getElementById ("cuerpo");
 vBody.style.background="white";
}