function abrirPopUp(e) {
    window.open(e, "", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, width=450, height=280, top=85, left=-140");
}
function exportarPedidosExcel(e) {
    var t = $("#data").val();
    "" != t && JSONToCSVConvertor(t, e, !0);
}
function enviarMailConsulta(e, t) {
    var a = document.getElementById("cuerpo").value;
    funSendEMail("Sitio Web", e, "", "", "Consulta sobre Pedido Nº " + t, a);
}
function funSendEMailUserFunction(e, t) {}
function funNOSendEMailUserFunction(e, t) {}
function getFechaActual() {
    var e = new Date(),
        t = e.getDate(),
        a = e.getMonth() + 1;
    return t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), t + "-" + a + "-" + e.getFullYear();
}
function getFechaActualAlt() {
    var e = new Date(),
        t = e.getDate(),
        a = e.getMonth() + 1;
    return t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), e.getFullYear() + "-" + a + "-" + t;
}
function getFechaMesAnterior() {
    var e = new Date(),
        t = e.getDate(),
        a = e.getMonth(),
        o = e.getFullYear();
    return 0 == a && (a = 12), 12 == a && (o -= 1), t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), t + "-" + a + "-" + o;
}
function getFechaSeisMeses() {
    var e = new Date(),
        t = e.getDate(),
        a = e.getMonth(),
        o = e.getFullYear();
    return (a -= 6) <= 0 && ((a = 12 + a), (o -= 1)), t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), t + "-" + a + "-" + o;
}
function getFechaMesAnteriorAlt() {
    var e = new Date(),
        t = e.getDate(),
        a = e.getMonth(),
        o = e.getFullYear();
    return 0 == a && (a = 12), 12 == a && (o -= 1), t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), o + "-" + a + "-" + t;
}
function getFechaSeisMesesAlt() {
    var e = new Date(),
        t = e.getDate(),
        a = e.getMonth(),
        o = e.getFullYear();
    return (a -= 6) <= 0 && ((a = 12 + a), (o -= 1)), t < 10 && (t = "0" + t), a < 10 && (a = "0" + a), o + "-" + a + "-" + t;
}
function getDateyyymmdd(e) {
    if ("undefined" == e || "" == e) return "";
    var t = (e = e.split("-"))[0],
        a = e[1];
    return e[2] + "-" + a + "-" + t;
}
function getDateddmmyyyy(e) {
    return "undefined" == e || "" == e ? "" : (e = e.split("-"))[2] + "-" + e[1] + "-" + e[0];
}
function stringToDate(e) {
    var t = e.split("-");
    return new Date(t[2], t[1] - 1, t[0]);
}
function sumarDiasAFecha(e, t) {
    var a = e;
    return a.setDate(a.getDate() + t), a;
}
function reload() {
    window.location.reload();
}
var itemTitTemp, itemImgTemp, itemPrecio;
function agregarACarritoCantidadListado(e, t, a) {
    if (((itemTitTemp = $("#COD" + e).text()), (itemImgTemp = t), (itemPrecioTemp = a), (cantItems = $("#cant" + e).val()), cantItems > 0 && "" != cantItems)) return funAddCartBulk(e, cantItems), funCalculate(), !1;
}
function agregarACarritoCantidad(e) {
    if ((funLoading(1), (cantItems = $("#caja_cantidad").val()), cantItems > 0 && "" != cantItems)) return funAddCartBulk(e, cantItems), funCalculate(), !1;
    funLoading(0);
}
function agregarACarrito(e, t, a) {
    (itemTitTemp = $("#COD" + e).text()), (itemImgTemp = t), (itemPrecioTemp = a), funAddCart(e), funCalculate();
}
function funAddCartUserFunction(e, t) {
    -1 != e
        ? ($("#modalcompra .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>¡Se agregó el producto a tu carrito!</h5>"),
          $("#modalcompra .modal-body").html("<img src='" + itemImgTemp + "' style='width:80px; height:auto; float:left;'> <b>" + itemTitTemp + "<br />" + itemPrecioTemp + "</b><br />"),
          (itemTitTemp = ""),
          (itemImgTemp = ""))
        : $("#modalcompra .modal-body").html("Ha habido un problema y el producto no pudo ser agregado a tu carrito:<br>" + t),
        $("#modalcompra").modal("show");
}
function funNOAddCartUserFunction(e, t) {
    -1 == e &&
        ($("#modalMensaje .modal-header").html("<h5 class='modal-title' id='exampleModalLabel'>El producto no ha sido agregado a su carrito</h5>"),
        $("#modalMensaje .modal-body").html("Ha habido un problema y el producto no pudo ser agregado a tu carrito.")),
        $("#modalMensaje ").modal("show");
}
function cambiarDeliveryLogin(e) {
    funLoading(1), funSetSessionVariable("DL", "0"), funDelivery(e);
}
function cambiarSaleTermLogin(e) {
    funLoading(1), funSetSessionVariable("ST", "0"), funSalesTerms(e);
}
function cambiarPlanDePagosLogin(e) {
    funLoading(1), funSetSessionVariable("CCP", "0"), funCreditCardLoanPlan(e);
}
function funCalculateUserFunction() {
    var e = $("#hidCartItemsQty").val(),
        t = $("#hidCartTotalTax").val(),
        a = $("#hidCartSubTotal").val(),
        o = $("#hidCartTotal").val(),
        /*
        o = o.replace(',', '.');
        o = parseFloat(o).toFixed(0);
        o = o.toString();
        */
        n = $("#hidCartInterest").val(),
        i = $("#hidCartDiscount").val();
    $("#contador").html(e),
        $("#contador2").html(e),
        $("#montoCarrito").html(o),
        $("#montoCarrito2").html(o),
        (-1 == $(location).attr("href").indexOf("CHECKOUT") && -1 == $(location).attr("href").indexOf("NPS")) ||
            ($("#txtItemsQty").html(e),
            $("#txtSubTotal").html(a),
            $("#txtInteres").html(n),
            $("#txtDescuento").html(i),
            "0.00" != $("#hidCartInterest").val() ? $("#interes_tr").css("display", "") : $("#interes_tr").css("display", "none"),
            "0.00" != $("#hidCartDiscount").val() ? $("#descuento_tr").css("display", "") : $("#descuento_tr").css("display", "none"),
            $("#txtTotalTaxes").html(t),
            $("#txtTotal").html(o)),
        funLoading(0);
}
function funLoading(e) {
    1 == e ? $(".loading").css("display", "block") : $(".loading").css("display", "none");
}
function countCarrito() {
    var e = $("#contador").text();
    return void 0 === e ? 0 : parseInt(e);
}
function JSONToCSVConvertor(e, t, a) {
    var o = "object" != typeof e ? JSON.parse(e) : e,
        n = "";
    if (((n += t + "\r\n\n"), a)) {
        var i = "";
        for (var r in o[0]) i += r + ";";
        n += (i = i.slice(0, -1)) + "\r\n";
    }
    for (var s = 0; s < o.length; s++) {
        for (var r in ((i = ""), o[s])) i += " " + o[s][r] + " ;";
        i.slice(0, i.length - 1), (n += i + "\r\n");
    }
    if ("" != n) {
        var l = t.replace(/ /g, "_"),
            d = "data:text/csv;charset=utf-8," + escape(n),
            c = document.createElement("a");
        (c.href = d), (c.style = "visibility:hidden"), (c.download = l + ".csv"), document.body.appendChild(c), c.on("click"), document.body.removeChild(c);
    } else alert("Invalid data");
}
function mostrarMediosPago() {
    $("#modalmediosdepago").modal("show");
}
!(function (e) {
    "use strict";
    (e.fn.equalHeight = function () {
        var t = [];
        return (
            e.each(this, function (a, o) {
                var n,
                    i = e(o);
                (n = "border-box" === i.css("box-sizing") || "border-box" === i.css("-moz-box-sizing") ? i.innerHeight() : i.height()), t.push(n);
            }),
            this.css("height", Math.max.apply(window, t) + "px"),
            this
        );
    }),
        (e.fn.equalHeightGrid = function (t) {
            var a = this.filter(":visible");
            a.css("height", "auto");
            for (var o = 0; o < a.length; o++)
                if (o % t == 0) {
                    for (var n = e(a[o]), i = 1; i < t; i++) n = n.add(a[o + i]);
                    n.equalHeight();
                }
            return this;
        }),
        (e.fn.detectGridColumns = function () {
            var t = 0,
                a = 0;
            return (
                this.filter(":visible").each(function (o, n) {
                    var i = e(n).offset().top;
                    if (0 !== t && i !== t) return !1;
                    a++, (t = i);
                }),
                a
            );
        });
    var t = 0;
    (e.fn.responsiveEqualHeightGrid = function () {
        var a = this,
            o = ".grids_" + t;
        function n() {
            var e = a.detectGridColumns();
            a.equalHeightGrid(e);
        }
        return a.data("grids-event-namespace", o), e(window).on("resize" + o + " load" + o, n), n(), t++, this;
    }),
        (e.fn.responsiveEqualHeightGridDestroy = function () {
            return this.css("height", "auto"), e(window).off(this.data("grids-event-namespace")), this;
        });
})(window.jQuery),
    jQuery(function (e) {
        e(".owl-item .product .image").responsiveEqualHeightGrid(),
            e(".product .image").responsiveEqualHeightGrid(),
            e(".product h4").responsiveEqualHeightGrid(),
            e(".product h4 a").responsiveEqualHeightGrid(),
            e(".product .description").responsiveEqualHeightGrid(),
            e(".product").responsiveEqualHeightGrid(),
            e(".owl-item").responsiveEqualHeightGrid(),
            e(".owl-item .product div.image").responsiveEqualHeightGrid(),
            e(".owl-item .product div.description h4").responsiveEqualHeightGrid(),
            e(".owl-item .product div.price").responsiveEqualHeightGrid(),
            e(".imagenitemarmado").responsiveEqualHeightGrid(),
            e(".elementoclass").responsiveEqualHeightGrid();
    }),
    $(document).ready(function () {
        switch (
            ($("a.6").css("display", "none"),
            $("nav > li:odd > a").addClass("color1"),
            logono2(),
            $("li.masopciones > a").on("click", function () {
                $(this).toggleClass("expand").toggleClass("collapsed").parent().find("> ul.masop").slideToggle("fast");
            }),
            $("a.cateaux").on("mouseover", function () {
                $(".modalMenu").css("background-image", "url(" + $(this).attr("name") + ")");
            }),
            $("#orden1").on("change", function () {
                funSetSessionVariable("orden", $("select[id=orden1] option:selected").val());
            }),
            $("#cantmostrar").on("change", function () {
                funSetSessionVariable("cantidad", $("select[id=cantmostrar] option:selected").val()), setTimeout("reload()", 800);
            }),
            $("#setcaja").on("click", function () {
                funSetSessionVariable("caja", "1"), setTimeout("reload()", 800);
            }),
            $("#setlista").on("click", function () {
                funSetSessionVariable("caja", "2"), setTimeout("reload()", 800);
            }),
            "1" === global_caja && $("#setcaja").addClass("selected"),
            "2" === global_caja && $("#setlista").addClass("selected"),
            global_orden)
        ) {
            case "1":
                $("#orden1 option").eq(2).prop("selected", !0);
                break;
            case "2":
                $("#orden1 option").eq(3).prop("selected", !0);
                break;
            case "3":
                $("#orden1 option").eq(0).prop("selected", !0);
                break;
            case "4":
                $("#orden1 option").eq(1).prop("selected", !0);
                break;
            default:
                $("#orden1 option").eq(0).prop("selected", !0);
        }
        switch (global_cantidad) {
            case "12":
                $("#cantmostrar option").eq(0).prop("selected", !0);
                break;
            case "28":
                $("#cantmostrar option").eq(1).prop("selected", !0);
                break;
            case "52":
                $("#cantmostrar option").eq(2).prop("selected", !0);
                break;
            default:
                $("#cantmostrar option").eq(0).prop("selected", !0);
        }
    });
