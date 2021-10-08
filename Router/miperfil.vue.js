var miPerfil = {
template:
`<div><div id="loaderforchanges" style="display: none;"></div>
<div id="modalCuit" role="dialog" tabindex="-1" class="fade modal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">¡ATENCION!</h5>
                <button class="close" type="button" aria-label="Close" data-dismiss="modal">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <p style="margin-bottom: 10px;" align="center" class="incorrectModalSaveText">¡El CUIT introducido no es
                    valido!</p>
            </div>
            <div class="modal-footer" style="display:none">
            </div>
        </div>
    </div>
</div>
<div id="modalDni" role="dialog" tabindex="-1" class="fade modal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">¡ATENCION!</h5>
                <button class="close" type="button" aria-label="Close" data-dismiss="modal">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <p style="margin-bottom: 10px;" align="center" class="incorrectModalSaveText">¡El DNI introducido no es
                    valido!</p>
            </div>
            <div class="modal-footer" style="display:none">
            </div>
        </div>
    </div>
</div>

<input hidden id="tipodocumento" value="§CUSTDOCTIPO§">
<input hidden id="provinciacl" value="§PROVINCIA§">
<input hidden id="direccion" value="§CUSTDIRECCION§">
<input hidden id="clasefiscal" value="§CLASEFISCAL§">
<div id="wrapper">
    <div class="container">
        <br>
        <br>
        <div class="row" style="padding: 0 15px;">
            <div class="col-md-8">
                <div>
                    <form id="formNPS" name="formNPS" novalidate="novalidate" class="bv-form"><button type="submit"
                            class="bv-hidden-submit" style="display: none; width: 0px; height: 0px;"></button><br>
                        <!--<h3 class="title-datos"><i aria-hidden="true" class="fa fa-user"></i>&nbsp; Mis datos</h3>-->
                        <div class="col-md-12" style="padding-left:0">
                            <h2 class="title">
                                Datos Personales
                            </h2>
                        </div>
                        <div class="row">
                            <input hidden>
                            <div class="col-md-12 control-label">
                                Numero de Cliente<br>
                                <input type="text" class="form-control" id="idcliente" name="idcliente" required=""
                                    maxlength="50" value="{(GBP_CUSTOMER)}" disabled>
                            </div>
                            <div class="col-md-12 control-label">
                                Apellido y Nombre <font color="red">*</font><br>
                                <input type="text" class="form-control input-perfil" id="nombre" name="nombre"
                                    required="" maxlength="50" data-bv-field="nombre" value="§CUSTNAME§">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 control-label">
                                Correo electrónico<font color="red">*</font><br>
                                <input type="text" class="form-control input-perfil" id="email" name="email" required=""
                                    maxlength="50" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                    data-bv-field="email" value="§CUSTMAIL§">
                            </div>
                            <div class="col-md-6 control-label">
                                Numero Telefonico<font color="red">*</font><br>
                                <input type="text" class="form-control input-perfil" id="telefono" name="telefono"
                                    required="" value="§CUSTTEL1§" minlength="8" data-maxlength="17" maxlength="17"
                                    pattern="(\d|-|\+|\(|\)|\s){8,17}" autocomplete="new-password"
                                    data-bv-field="telefono"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                Clase Fiscal<font color="red">*</font><br>
                                <select name="tipo_fiscal" id="tipo_fiscal" class="form-control input-perfil"
                                    required="" style="float:left;min-width:85px;margin-bottom: 10px;"
                                    data-bv-field="tipo_fiscal">
                                    <option value="">Elige una Clase Fiscal</option>
                                    <option value="2">Consumidor Final</option>
                                    <option value="3">Monotributista</option>
                                    <option value="1">Responsable Inscripto</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4" style="margin-bottom: 10px;">
                                Documento<font color="red">*</font><br>
                                <select name="tipo_documento" id="tipo_documento" class="form-control input-perfil"
                                    required="" style="float:left;min-width:85px" data-bv-field="tipo_documento">
                                    <option value="">Elige un Tipo</option>
                                    <option value="5">DNI</option>
                                    <option value="1">CUIT</option>
                                </select>
                            </div>
                            <div class="col-md-8">
                                Numero de Documento (SOLO NUMEROS)<font color="red">*</font><br>
                                <input type="text" class="form-control input-perfil" id="numero_documento"
                                    name="numero_documento" value="§CUSTDOCNUMERO§" required="" maxlength="11"
                                    data-minlength="7" data-maxlength="11" pattern="[0-9]{7,11}"
                                    autocomplete="new-password" data-bv-field="numero_documento">
                                <input type="hidden" id="hid_tipo_documento input-perfil" value="2"></div>
                        </div>
                        <div id="formEnvioPack"><br>
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-block form-group btn-direccion-facturacion "
                                style="display: none;">
                                <input type="checkbox" id="invoice_address" name="invoice_address" aria-invalid="false"
                                    disabled="disabled">
                                <label for="invoice_address">La dirección de facturación es la misma que la dirección de
                                    envío</label>
                            </div>
                            <h2 class="title">Datos de Facturacion</h2>
                            <div class="row">
                                <div class="input-group col-md-12" style="margin-bottom:10px">
                                    <select name="provincia" id="provincia" class="form-control col-md-12 input-perfil"
                                        required="" data-bv-field="provincia">
                                        <option value="">Seleccione una provincia</option>
                                        <option value="54020">Buenos Aires</option>
                                        <option value="54014">Catamarca</option>
                                        <option value="54022">Chaco</option>
                                        <option value="54012">Chubut</option>
                                        <option value="54019">Ciudad Autónoma de Buenos Aires</option>
                                        <option value="54001">Córdoba</option>
                                        <option value="54005">Corrientes</option>
                                        <option value="54004">Entre Ríos</option>
                                        <option value="54010">Formosa</option>
                                        <option value="54007">Jujuy</option>
                                        <option value="54016">La Pampa</option>
                                        <option value="54015">La Rioja</option>
                                        <option value="54002">Mendoza</option>
                                        <option value="54021">Misiones</option>
                                        <option value="54011">Neuquén</option>
                                        <option value="54009">Río Negro</option>
                                        <option value="54023">Salta</option>
                                        <option value="54008">San Juan</option>
                                        <option value="54013">San Luis</option>
                                        <option value="54017">Santa Cruz</option>
                                        <option value="54024">Santa Fe</option>
                                        <option value="54006">Santiago del Estero</option>
                                        <option value="54018">Tierra del Fuego</option>
                                        <option value="54003">Tucumán</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    Calle y Altura<font color="red">*</font><br>
                                    <input type="text" class="form-control input-perfil" id="direccion_calle"
                                        name="direccion_calle" value="" required="" maxlength="40"
                                        autocomplete="new-password" data-bv-field="direccion_calle">
                                </div>
                                <div class="col-md-2">Piso<br>
                                    <input type="text" class="form-control input-perfil" id="direccion_piso"
                                        name="direccion_piso" value="" maxlength="6" autocomplete="new-password"
                                        data-bv-field="direccion_piso">
                                </div>
                                <div class="col-md-2">Depto<br>
                                    <input type="text" class="form-control input-perfil" id="direccion_departamento"
                                        name="direccion_departamento" value="" maxlength="4" autocomplete="new-password"
                                        data-bv-field="direccion_departamento">
                                </div>
                                <div class="col-md-2">CP<font color="red">*</font><br>
                                    <input type="text" class="form-control input-perfil" id="direccion_cp"
                                        name="direccion_cp" value="§CUSTCODIGOPOSTAL§" required="" maxlength="4"
                                        pattern="^[0-9]{4}$" autocomplete="new-password" data-bv-field="direccion_cp">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">Localidad<font color="red">*</font><br>
                                    <input type="text" class="form-control input-perfil" id="direccion_localidad"
                                        name="direccion_localidad" value="§CUSTCIUDAD§" required="" maxlength="40"
                                        autocomplete="new-password" data-bv-field="direccion_localidad">
                                </div>
                            </div>
                            <div class="col-sm-12">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <p id="checkoutfinalizacompra">
                                    <button id="finalizarCompra" type="submit" class="btn btn-success col-md-12"
                                        data-loading-text="<i class='fa fa-spinner fa-spin '></i> Actualizando">Actualizar
                                        Datos</button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div></div>`
};
