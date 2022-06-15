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