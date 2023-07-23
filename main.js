let usuario = {
    registro: "",
    senha : ""
}


$(document).ready(function() {
   $("#btnEntrar").click(function(){
       usuario.registro = $("#usuario ").val();
       usuario.senha = $("#senha").val();

       localStorage.setItem("usuario", JSON.stringify(usuario))
       // const objetoArmazenado = JSON.parse(localStorage.getItem('usuario'));
       
   })
})

