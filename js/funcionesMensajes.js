function getMensaje(){
    $.ajax({
        url:"http://130.61.126.147:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            pintarMensaje(respuesta);
        }
    });
}

function postMensaje(){
    let mensajes = {
        messageText:$("#messageText").val()
    };
    
    $.ajax({
        url:"http://130.61.126.147:8080//api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(mensajes),
        success:function(respuesta){
            alert("se creo correctamente la respuesta");
            window.location.reload();
        }

    });

}

function putMensaje(){

}

function deleteMensaje(){

}

/////////////////////////////////////////////////////
function pintarMensaje(respuesta){
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="</tr>";   
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}