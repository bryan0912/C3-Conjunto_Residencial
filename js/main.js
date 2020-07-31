// document.getElementById("btn-filtrar").addEventListener('click',(6) => {alert("filtrar")};


document.getElementById("btn-guardar-inmueble").addEventListener('click', (e) =>{
	if(document.getElementById("frm-mensualidad").reportValidity()){
        let nombre, documento, genero, fecha_nac;
    }else{
        //alert("Error de validación de campos.")
    }
}
);


	
    	
$(document).ready((e) => {
    $("#btn-adicionar").click((e) => {
        $('#modal-adicionar').modal('toggle');
    });
});