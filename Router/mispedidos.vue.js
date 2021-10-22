var misPedidos ={
template:
`<div>
<div id="loaderforchanges" style="display: none;"></div>
<input hidden id="archivogoogle" linkarchivo="" name="archivogoogle" value="">
<input hidden id="archivogooglename" linkarchivo="" name="archivogooglename" value="">
<input hidden id="archivosubido" linkarchivo="" name="archivosubido" value="">
<div class="fade modal" id="modalCookies" role="dialog" tabindex="-1" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">¡Atencion!</h5>
<button class="close" type="button" aria-label="Close" data-dismiss="modal">
<span aria-hidden="true">×</span>
</button>
</div> 
<div class="modal-body" style="margin-bottom: 2px;">
<p style="font-size:32px;line-height: 30px;" align="center"> <span style="color: #00f402;text-decoration: none;">Necesitas Habilitar los Cookies</span></p>
<p align="center">Sino el formulario no funcionara<br>de manera correcta</p>
</div>
<div class="modal-footer" style="display:none">
</div>
</div>
</div>
</div>
<div class="fade modal" id="modalPedido" role="dialog" tabindex="-1">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" style="font-size: 30px !important;">¡ATENCION!</h5>
<button class="close" type="button" aria-label="Close" data-dismiss="modal">
<span aria-hidden="true">×</span>
</button>
</div>
<div class="modal-body">
<p align="center" style="margin-bottom: 10px;font-size: 25px;line-height: 30px;">Los Montos Aqui Indicados<br>Estan Actualizados</p>
</div>
<div class="modal-footer" style="display:none">
</div>
</div>
</div>
</div>
<div class="fade modal" id="modalComprobante" role="dialog" tabindex="-1">
<div class="modal-dialog" role="document" style="z-index: 9999999999;max-width: 750px;">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title">Subida de Comprobante</h5>
<button class="close" type="button" aria-label="Close" data-dismiss="modal">
<span aria-hidden="true">×</span>
</button>
</div>
<div class="modal-body" style="max-height: calc(100vh - 230px);overflow-y: auto;-webkit-overflow-scrolling: touch;">
<div class="container" style="background: #0f9d58;">
<style>.forms-studio{position:relative;padding-bottom:56.25%;overflow:hidden;width:100%;height:1250px;}</style><div class='forms-studio'>
<div id="formulario">  
<form id="formNPS" name="formNPS" novalidate="novalidate">
<div class="col-md-12" id="seccionprincipal">
<h2 id="titulos-tarjeta">
<span class="titulo-envio">Subida de Comprobantes Bancarios</span>
</h2>
<h2 class="titulos-formulario">
Para subida de comprobantes
</h2>
</div>
<div class="row">
<div class="col-md-12 control-label">
<div class="titulopreguntas">
Numero de Pedido <font color="#db4437">*</font><br></div>
<div class="forms-studio-helper text">(Numero del pedido dado por la web - SOLO NUMEROS)</div>
<input type="text" class="form-control" id="pedido"  name="pedido" required value="" minlength="4" data-maxlength="17" maxlength="17" pattern="(\d|-|\+|\(|\)|\s){4,17}" autocomplete="new-password" placeholder="Numero del pedido"/>
</div>
</div>
<div class="row">
<div class="col-md-12 control-label"> <div class="titulopreguntas">
Nombre del Cliente <font color="#db4437">*</font><br></div>
<input type="text" class="form-control" id="nombre" name="nombre" required value="" maxlength="50" placeholder="Nombre del Cliente"/>
</div>
</div>
<div class="row">
<div class="col-md-12 control-label"><div class="titulopreguntas">
Correo electrónico <font color="#db4437">*</font><br></div>
<input type="text" class="form-control" id="email"  name="email" required value="" maxlength="50" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="Email del cliente"/>
</div>
</div>
<div class="row">
<div class="col-md-12 control-label">
<div class="titulopreguntas">
Celular <font color="#db4437">*</font><br></div>
<div class="forms-studio-helper text">(solo numeros - no usar simbolos)</div>
<input type="text" class="form-control" id="telefono" name="telefono" required value="" minlength="8" data-maxlength="17" maxlength="17" pattern="(\d|-|\+|\(|\)|\s){8,17}" autocomplete="new-password" placeholder="Numero de celular"/>
</div>
</div>
<div class="row">
<div class="col-md-12 control-label">
<div class="titulopreguntas">
Comprobante Bancario <font color="#db4437">*</font><br></div>
<div class="forms-studio-helper file">(Los archivos deben tener nombres cortos y no poseer caracteres especiales)</div>
<div class="input-field">  
<div class="file-field input-field"><div class="btn file-upload-btn"><span>Añadir Archivo</span><input  type="file" class="form-control" name="file" id="file"></div><div class="file-path-wrapper"><input class="file-path garlic-auto-save" type="text" name="filename" id="filename" placeholder="Clickea Añadir Archivo" data-error="#err-file-4" required="required" readonly="readonly" data-msg-required="Por favor sube un archivo"> </div><div id="err-file-4"></div></div>
</div>
</div>
</div>
<div class="row submit"><div class="input-field col m6 s6"><button type="submit" id="submit" class="waves-effect waves-light btn btn-large btnSubmit forms-studio-submit">Enviar</button></div><div class="input-field col m6 s6"><div class="preloader-wrapper big active spinner hide"><div class="spinner-layer forms-studio-spinner"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div></div></div>  
</form>
<div class="row col s12 fs-confirmation" id="confirmacion"></div>
</div>
</div>
</div>
</div>
<div class="modal-footer" style="display:none">
</div>
</div>
</div>
</div>
<script>
if({(GBP_CUSTOMER)} == -1)
{
location.href="{(GBP_URLBEGIN)}LOGIN/login_alta{(GBP_URLEND)}";
}
</script>

<div class="container">
<script>
function fBuscador1() {
var fi =  getDateyyymmdd($('#fechaInicio').val());
var ff =  getDateyyymmdd($('#fechaFin').val()) ;
if(ff < fi) {
alert('La fecha final no puede ser menor a la inicial.');
} else {
window.location=('{(GBP_URLBEGIN)}' + 'MISPEDIDOS/FECHAI=' + fi + '/'+  'FECHAF=' +   ff   +'/{(GBP_URLEND)}');
}
}
$(document).ready(function() {
if( '{(FECHAI)}' != '') {
$('#fechaInicio').val(getDateddmmyyyy('{(FECHAI)}'));
} else {
$('#fechaInicio').val(getFechaMesAnterior());
}
if( '{(FECHAF)}' != '') {
$('#fechaFin').val(getDateddmmyyyy('{(FECHAF)}'));
} else {
$('#fechaFin').val(getFechaActual());
}
if(§PEDIDOSCOUNT§ == 0) {
$("#mensaje").show();
} else {
$("#datosCliente").show();
}
});
</script>
<br>
<br>
<div class="padding">
<input type="hidden" id="data" />
<div class="row">
<div class="col-md-9 table-responsive card-compras">
<!--<h3 style="margin-bottom: 1em;"><i aria-hidden="true" class="fa fa-shopping-cart " style=""></i>&nbsp; Mis compras</h3>-->
<table class="tablalistadocc table-striped table-responsive" cellspacing="0" cellpadding="5" width="95%" align="center" style="font-size: .8rem;border-spacing: 0;width: 100%;margin: 0 0 1rem;border: 1px solid #bebebe;border-radius: 4px;overflow: hidden;border-collapse: separate;">
<tr style="background-color: rgb(53, 57, 59);  color: rgb(248, 245, 242); border-right-color: rgb(176, 170, 160);font-size: .8rem;border-spacing: 0;" class="cabtablalistadocc">
<th class="c" align="center" style="text-align: center;"># de Pedido</th>
<th class="c" align="center" style="text-align: center;">Fecha</th>
<th class="c" align="center" style="text-align: center;">Estado</th>
<th class="r" align="center" style="text-align: center;">Monto</th>
<th class="c" align="center" style="text-align: center;">Detalle</th>
<th class="c" align="center" style="text-align: center;">Comprobante</th>
</tr>
<!--AGREGAR SQL DE MIS PEDIDOS-->
</table>
<div class="col_pager">
</div>
</div>
</div>
</div>
</div>
<div class="correctSave col-md-12 alert" role="alert" id="correctsave" style="display:none;">
<div class="col-md-12 contenedor-svg-maximus">
<div style="background: #191919;border-radius: 4px;padding: 1em;" class="svg-maximus">
<img src="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/maximuslogomail.png" class="svg-maximus-verde" style="max-width: 90%;width: 18em;">
</div>
<div class="pedido-monto col-md-12">
<p class="orden-generada">¡SU COMPROBANTE HA SIDO CARGADO!</p>
<p id="nroPedido"></p>
<p>Una vez confirmado el pago, su pedido avanzara a la siguiente etapa.</p>
</div>
</div>
<div class="collapse fade" data-parent="#accordion" id="comprar" style="background: rgb(15, 157, 88) none repeat scroll 0% 0%;">
<div id="comprar" style="margin-right: auto;margin-left: auto;display: grid;margin-top: 2%;" class="collapse show">
</div>
</div>
<div id="prepararse" style="display:flex;flex-direction: column;flex-wrap: wrap;">
</div>
<br>
<div class="row justify-content-around col-md-12 resumpen-pedido">
<div class="columna-1 col-xs-12 col-sm-12 col-md-12 col-lg-12">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 resumen-producto-box" style="border:none;">
</div>
</div>
<span id="decidirdatosenvipack" style="display:none"><b>*</b>
Lo estaremos llamando para verificar los datos de la compra, con el fin de confirmar la información que tenemos registrada y poder hacer efectiva la compra.
</span>
</div>
<div class="detalle-compra-realizada">
<div class="detalle-compra-envio">
<b class="detalle-compra-titulo">Detalles de la carga del comprobante</b>
<b class="detalle-compra-subtitulo" style="color:#666">Numero de Pedido</b>
<p class="detalle-compra-informacion detalle-compra-tipo-envio" id="numeropedido"></p>
<b class="detalle-compra-subtitulo" style="color:#666">Horario de la Carga</b>
<p class="detalle-compra-informacion detalle-compra-tipo-envio" id="fecha"></p>
<b class="detalle-compra-subtitulo" style="color:#666">Nombre del Cliente</b>
<p class="detalle-compra-informacion detalle-compra-tipo-envio" id="nombrecliente"></p>
<b class="detalle-compra-subtitulo" style="color:#666">Correo Electronico</b>
<p class="detalle-compra-informacion detalle-compra-tipo-envio" id="emailpedido"></p>
<b class="detalle-compra-subtitulo" style="color:#666">Celular Cliente</b>
<p class="detalle-compra-informacion detalle-compra-tipo-envio" id="telefonocliente"></p>
<b class="detalle-compra-subtitulo" style="color:#666">Comprobante Bancario</b>
<p class="detalle-compra-informacion detalle-compra-tipo-envio" id="enlacecomprobante"></p>
</div>
</div>
</div>
</div>`
}
