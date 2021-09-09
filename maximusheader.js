var autoPredict = new Vue({
  el: "#busqueda",
  data: {
    detail: null,
    search: "",
    searchMob: "",
  },
  methods: {
    buscadorMobile() {
      inputMobile.addEventListener("keyup", (e) => {
        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        //alert(e)
        clearTimeout(timeoutMobile);

        // Make a new timeout set to go off in 1000ms (1 second)
        timeoutMobile = setTimeout(() => {
          cargarPrediccionesMobile();
        }, 500);
      });
    },
  } /*,
  	  watch: {
  search: function(val){
  GetBusquedaData()
  }
  	  }*/,
});

function FetchBusquedaData(d) {
  autoPredict.detail = d;
}

function GetBusquedaData() {
  if (autoPredict.search.length > 0) {
    var jsondata = JSON.stringify({
      prli_id: "{(GBP_PRICELIST)}",
      comp_id: "{(GBP_COMPANY)}",
      ws_id: "{(GBP_WSID)}",
      search: autoPredict.search,
    });
  } else if (autoPredict.searchMob.length > 0) {
    var jsondata = JSON.stringify({
      prli_id: "{(GBP_PRICELIST)}",
      comp_id: "{(GBP_COMPANY)}",
      ws_id: "{(GBP_WSID)}",
      search: autoPredict.searchMob,
    });
  }

  //console.log(jsondata)
  funScript("web.MAX.GetItemDataSearch", jsondata);
}

$(window).on("load", function () {
  if ($("#divGBPLogo").length) {
    $("#divGBPLogo")[0].remove();
  }
});
var global_cantidad = "@@cantidad";
var global_orden = "@@orden";
var global_caja = "@@caja";
var global_empresa_nombre = "@@nombre_sitio";
function logono2() {
  if ("{(GBP_CUSTOMER)}" != -1) {
    $("#comprobantelogueado").show();
    $("#comprobantelogueadomob").show();
    $("#abircomprobantenologueado").hide();
    $("#abircomprobantenologueadomob").hide();
  }
  if ("{(GBP_CUSTOMER)}" == -1) {
    $("#comprobantelogueado").hide();
    $("#comprobantelogueadomob").hide();
    $("#abircomprobantenologueado").show();
    $("#abircomprobantenologueadomob").show();
  }
}
$(document).ready(function () {
  funCalculate();
  $("INPUT#INPUT_BUSCADOR").on("keypress", function (e) {
    if (e.which == 13 && $("#INPUT_BUSCADOR").val() == "") {
      return false;
    }
  });
  if ($("#usaRegistro").val() == "True") {
    $("#headRegistro").show();
  }
});

const buttonCarrito = document.querySelector(".carrito");
const carritoMobile = document.querySelector(".carrito-drop-mobile");
//animacion de carrito mobile
buttonCarrito.addEventListener("click", () => {
  let claseActive = "carrito-drop-active";

  if (!carritoMobile.classList.contains(claseActive)) {
    carritoMobile.classList.add(claseActive);
  } else {
    carritoMobile.classList.remove(claseActive);
  }
});
//animacion de search mobile
const buttonSearch = document.querySelector(".search-mobile-button");
buttonSearch.addEventListener("click", () => {
  let searchMobile = document.querySelector(".search-mobile");
  let claseActive = "search-mobile-active";
  let claseActiveCarrito = "carrito-drop-active";
  let searchBar = document.querySelector(".search-input-mobile");

  cerrarSideBarMobile();
  searchBar.focus();
  searchBar.setSelectionRange(searchBar.value.length, searchBar.value.length);

  let flechaGuardarBusqueda = document.querySelector(".guardar-search-mobile");

  if (!searchMobile.classList.contains(claseActive)) {
    searchMobile.classList.add(claseActive);
    if (carritoMobile.classList.contains(claseActiveCarrito)) {
      carritoMobile.classList.remove(claseActiveCarrito);
    }
  }
  flechaGuardarBusqueda.addEventListener("click", () => {
    if (searchMobile.classList.contains(claseActive)) {
      searchMobile.classList.remove(claseActive);
      suggBoxMobile.innerHTML = "";
      inputMobile.value = "";
    }
  });
});

//mostrar cruz y esconder menu hamburguesa o al reves y mostrar u ocultar menu
const menu = document.querySelector(".hamburger-menu");
const cruz = document.querySelector(".cross");
const spans = document.querySelectorAll(".burg");
const claseCruzActiva = "cruz-active";
const hamburgerInactivo = "hamburger-inactive";
const prodsDropdown = document.querySelectorAll(".prods-dropdown");
const none = "none";
const flex = "flex";
const unscrollable = "unscrollable";

const menuCategorias = document.querySelector(".menu-categorias");
const menuCatActive = "menu-categorias-active";

menu.addEventListener("click", () => {
  if (!cruz.classList.contains(claseCruzActiva)) {
    document.body.classList.add(unscrollable);
    cruz.classList.add(claseCruzActiva);
    menu.classList.add(hamburgerInactivo);
    for (span of spans) {
      span.classList.add(hamburgerInactivo);
    }
    menuCategorias.classList.add(menuCatActive);
  }
});
/* MOSTRAR Y OCULTAR SUB CATEGORIA SLIDE LEFT */

const slideActive = "sub-menu-categorias-slide-active";
const sideUlActive = "prods-slide-left-active";
const categoriasMenuMobile = [
  ...document.querySelectorAll(".menu-productos-dropdown"),
];
const subCategoriasLeft = document.querySelector(".sub-menu-categorias-slide");
const ulCatsLeft = [...document.querySelectorAll(".prods-slide-left")];

categoriasMenuMobile.forEach((cat) => {
  cat.addEventListener("click", () => {
    subCategoriasLeft.classList.add(slideActive);
    ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.add(sideUlActive);
    ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.remove(none);

    const slideBackArrows = [
      ...document.querySelectorAll(".slide-back-menu-left"),
    ];
    slideBackArrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.remove(
          sideUlActive
        );
        subCategoriasLeft.classList.remove(slideActive);
        setTimeout(() => {
          ulCatsLeft[categoriasMenuMobile.indexOf(cat)].classList.add(none);
        }, 300);
      });
    });
  });
});
//CERRAR MENU DE CATEGORIAS MOBILE
cruz.addEventListener("click", () => {
  cerrarSideBarMobile();
});

//MOSTRAR Y OCULTAR BARRA DE CATEGORIAS EN WEB Y MOSTRAR SUB CATEGORIAS

////////// CLASES CAT PRINCIPAL
const categoriasWeb = document.querySelector(".categorias-web");
const categoriasWebActive = "menu-categorias-active-web";
const hamburgerWebInactive = "hamburger-web-inactive";
const hamburguesaWeb = categoriasWeb.children[0];
const cruzWeb = categoriasWeb.children[1];
const cruzWebActive = document.querySelector(".cruz-menu-web-active");

const sidebarMenuWeb = document.querySelector(".sidebar-menu-web");
const sidebarActive = "sidebar-menu-web-active";
const columnaSide = "columna-side";

/////////// CLASES CAT SECUNDARIA
const categorias = [...document.querySelectorAll(".apertura-cat-principal")];
const catsSecundarias = [
  ...document.querySelectorAll(".cats-secundarias-sidebar"),
];
const catsSidebar = [...document.querySelectorAll(".categorias-sidebar")];
const catActual = "cat-actual";
const flexComponentesPerifericos = "flex-componentes-perifericos";

const rectangleLeft = [...document.querySelectorAll(".rectangle-left")];

categorias.forEach((cat) => {
  cat.addEventListener("mouseover", () => {
    agregarNone(); // le agrega la clase none si algun submenu esta abierto antes de abrir el que se quiera abrir
    if (catsSecundarias[categorias.indexOf(cat)].classList.contains(none)) {
      catsSecundarias[categorias.indexOf(cat)].classList.remove(none);
      cat.children[0].classList.add(catActual);
    }
    if (
      catsSecundarias[categorias.indexOf(cat)].children[0].classList.contains(
        none
      )
    ) {
      catsSecundarias[categorias.indexOf(cat)].classList.add(
        flexComponentesPerifericos
      );
      //catsSecundarias[categorias.indexOf(cat)].children[0].classList.remove(none)
      for (
        var i = 0;
        i < catsSecundarias[categorias.indexOf(cat)].children.length;
        i++
      ) {
        catsSecundarias[categorias.indexOf(cat)].children[i].classList.remove(
          none
        );
      }
      /*if(catsSecundarias[categorias.indexOf(cat)].children.length > 1){
				  catsSecundarias[categorias.indexOf(cat)]
                  catsSecundarias[categorias.indexOf(cat)].children[1].classList.remove(none)			  
                }*/
    }
    if (rectangleLeft[categorias.indexOf(cat)].classList.contains(none)) {
      //rectangleLeft[categorias.indexOf(cat)].children[0].classList.remove(none);
      rectangleLeft[categorias.indexOf(cat)].classList.remove(none);
    }
  });
});

function agregarNone() {
  categorias.forEach((cat) => {
    if (!catsSecundarias[categorias.indexOf(cat)].classList.contains(none)) {
      catsSecundarias[categorias.indexOf(cat)].classList.add(none);
      cat.children[0].classList.remove(catActual);
    }
    if (catsSecundarias[categorias.indexOf(cat)].children[0]) {
      if (
        !catsSecundarias[
          categorias.indexOf(cat)
        ].children[0].classList.contains(none)
      ) {
        catsSecundarias[categorias.indexOf(cat)].children[0].classList.add(
          none
        );
        if (catsSecundarias[categorias.indexOf(cat)].children[1]) {
          catsSecundarias[categorias.indexOf(cat)].children[1].classList.add(
            none
          );
        }
        catsSecundarias[categorias.indexOf(cat)].classList.remove(
          flexComponentesPerifericos
        );
        cat.children[0].classList.remove(catActual);
      }
    }
    if (!rectangleLeft[categorias.indexOf(cat)].classList.contains(none)) {
      //rectangleLeft[categorias.indexOf(cat)].children[0].classList.add(none);
      rectangleLeft[categorias.indexOf(cat)].classList.add(none);
    }
  });
}

const opacityDiv = document.querySelector(".opacidad-menu");
hamburguesaWeb.addEventListener("click", () => {
  document.body.classList.add(unscrollable);
  opacityDiv.classList.remove(none);
  sidebarMenuWeb.classList.add(sidebarActive);
  hamburguesaWeb.classList.add(hamburgerWebInactive);
  cruzWeb.classList.remove(none);

  opacityDiv.addEventListener("mouseover", () => {
    setTimeout(() => {
      agregarNone();
    }, 1000);
  });
  opacityDiv.addEventListener("click", () => {
    agregarNone();
    cerrarSideBarWeb();
    cerrarSuggBoxMobile();
  });
  cruzWeb.addEventListener("click", () => {
    cerrarSideBarWeb();
  });
});
//BUSCADOR
function fBuscadorMobile() {
  var B = document.querySelector(".search-input-mobile").value.trim();
  window.location =
    "https://www.maximus.com.ar/ARTICULOS/SCA_ID=-1/CAT_ID=-1/SCAT_ID=-1/m=-1/OR=1/BUS=" +
    B +
    ";/maximus.aspx" +
    "?s=" +
    B;
}
function fBuscadorWeb() {
  var B = document.querySelector(".search-input").value.trim();
  window.location =
    "https://www.maximus.com.ar/ARTICULOS/SCA_ID=-1/CAT_ID=-1/SCAT_ID=-1/m=-1/OR=1/BUS=" +
    B +
    ";/maximus.aspx" +
    "?s=" +
    B;
}
//ENTER PARA BUSCADOR WEB
document.querySelector(".search-input").addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    fBuscadorWeb();
  }
});
//ENTER PARA BUSCAR EN MOBILE
document
  .querySelector(".search-input-mobile")
  .addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      fBuscadorMobile();
    }
  });

/* AUTOCOMPLETADO SEARCH WEB */
const inputWeb = document.querySelector(".search-input");
const suggBoxWeb = document.querySelector(".auto-complete-web");
let busquedas = [];
let suggestions = [];
let timeoutWeb = null;

const cerrarSuggBox = () => {
  if (!suggBoxWeb.size > 0) {
    suggBoxWeb.innerHTML = "";
    opacityDiv.classList.add(none);
    //inputWeb.blur();
    autoPredict.detail = [];
  }
};

inputWeb.addEventListener("keyup", (e) => {
  if (e.key == "ArrowDown" || e.key == "ArrowUp") {
    moveThroughSuggestions(event.key, 0, inputInitValue);
  } else if (e.key === "Escape") {
    cerrarSuggBox();
    inputWeb.blur();
  } else if (inputWeb.value.length > 0) {
    clearTimeout(timeoutWeb);
    timeoutWeb = setTimeout(() => {
      cargarPrediccionesWeb();
    }, 500);
  } else if (inputWeb.value.length == 0) {
    cerrarSuggBox();
  }
});

function cargarPrediccionesWeb() {
  GetBusquedaData();
  timeoutWeb = setTimeout(() => {
    suggestions = autoPredict.detail;
    let userData = inputWeb.value;
    let mayoresCatsRepetidas = [];
    let mayoresSubCatsRepetidas = [];

    if (userData.length > 0) {
      opacityDiv.classList.remove(none);
    } else {
      opacityDiv.classList.add(none);
    }

    //si las sugerencias y lo que se ingreso no estan vacios
    nombresCat = [];
    //var palabrasUserData = userData.toLocaleLowerCase().split(" ");
    if (suggestions && userData.length > 0) {
      /* busquedas = suggestions.filter(data => {
  				var i = 0;
  				palabrasUserData.forEach(palabra => {
  				  if(data.nomProd.toLocaleLowerCase().toLocaleLowerCase().includes(palabrasUserData[i])){
  					i++;
  				  }
  				});
  				return i == palabrasUserData.length;
  			  });
  			  suggestions = busquedas;*/
      //tomo todas las categorias
      suggestions.forEach((sugg) => {
        mayoresCatsRepetidas.push({
          cat: `${sugg.cat}`,
          cat_id: `${sugg.cat_id}`,
        });
        mayoresSubCatsRepetidas.push({
          subcat: `${sugg.subcat}`,
          subcat_id: `${sugg.subcat_id}`,
        });
      });
      //ordeno las categorias alfabeticamente y acomodo el array segun cantidad de coincidencias
      mayoresCatsRepetidas.sort((a, b) => a.cat_id.localeCompare(b.cat_id));
      mayoresSubCatsRepetidas.sort((a, b) =>
        a.subcat_id.localeCompare(b.subcat_id)
      );

      //remuevo las categorias repetidas
      mayoresCatsRepetidas = mayoresCatsRepetidas
        .filter((cat, index) => cat != mayoresCatsRepetidas[index - 1])
        .splice(0, 1);
      mayoresSubCatsRepetidas = mayoresSubCatsRepetidas
        .filter((subcat, index) => subcat != mayoresSubCatsRepetidas[index - 1])
        .splice(0, 1);

      //creo el html con las categorias limitadas
      suggestions = suggestions
        .splice(0, 5)
        .map((data) => {
          return (data = `<div class="auto-search">
  									  <a href='https://www.maximus.com.ar/DETALLE/${data.nomProd
                        .split(" ")
                        .join("-")}/ITEM_ID=${
            data.ID
          }/maximus.aspx' class="auto-link"><img class="imgSuggestion" src="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/${
            data.codeImg
          }_100.jpg" width="50" height="50"><strong>${data.nomProd}</strong></a>
  								  </div>`);
        })
        .join("");

      //creo el html para las 2 categorias
      mayoresCatsRepetidas = mayoresCatsRepetidas
        .map((cat) => {
          return (cat = `<div class="auto-search">
  									<a href="https://www.maximus.com.ar/ARTICULOS/CAT_ID=${cat.cat_id}/SCAT_ID=-1/SCA_ID=-1/m=-1/OR=1/maximus.aspx" class="auto-link-cat sugg-cat-web">Busca más productos en<strong>&nbsp;${cat.cat}</strong></a>
  								</div>`);
        })
        .join("");

      mayoresSubCatsRepetidas = mayoresSubCatsRepetidas
        .map((subcat) => {
          return (subcat = `<div class="auto-search">
  									<a href="https://www.maximus.com.ar/ARTICULOS/CAT_ID=-1/SCAT_ID=${subcat.subcat_id}/SCA_ID=-1/m=-1/OR=1/maximus.aspx" class="auto-link sugg-cat-web">Busca más productos en<strong>&nbsp;${subcat.subcat}</strong></a>
  								</div>`);
        })
        .join("");

      //creo el html de las sugerencias mas el html de las categorias a mostrar
      let totalHTML =
        suggestions +
        ' <hr class="thin-line container"> ' +
        mayoresCatsRepetidas +
        ' <hr class="thin-line container"> ' +
        mayoresSubCatsRepetidas;

      if (suggestions.length > 0) {
        suggBoxWeb.innerHTML = totalHTML;
        let inputInitValue = inputWeb.value;
        /*document.onkeydown = (event) => {
  					  if(event.key == 'ArrowDown' || event.key == 'ArrowUp'){
  						  moveThroughSuggestions(event.key, 0, inputInitValue)
  					  }else if(event.key === "Escape"){
						  alert('sadasdasdasdasdas')
  						  cerrarSuggBox();
						  inputWeb.blur();
  					  }
  				  }*/
      } else {
        suggBoxWeb.innerHTML =
          '<div class="auto-search">No se encontraron coincidencias</div>';
      }
    } else {
      checkEmpty(suggestions, inputWeb, suggBoxWeb);
    }
  }, 500);
}

opacityDiv.addEventListener("click", () => {
  const suggBoxWeb2 = document.querySelector(".auto-complete-web");
  /*if(!suggBoxWeb2.size > 0){
          suggBoxWeb2.innerHTML = '';
          opacityDiv.classList.add(none);
        }*/
  cerrarSuggBox();
  cerrarSuggBoxMobile();
});

/* AUTOCOMPLETADO CON RELLENO DE INPUT Y FLECHITAS */
function moveThroughSuggestions(keyPressed, pos, inputInitValue) {
  let autoSearchs = document.querySelectorAll(".auto-search");
  if (keyPressed == "ArrowDown") {
    if (pos == -1) {
      pos = 0;
      autoSearchs[pos].classList.add("auto-search-selected");
      inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(
        autoSearchs[pos].children[0].innerHTML.indexOf(">") + 1,
        autoSearchs[pos].children[0].innerHTML.indexOf("/") - 1
      );
      document.onkeydown = () => {
        if (event.key == "ArrowDown" || event.key == "ArrowUp") {
          autoSearchs[pos].classList.remove("auto-search-selected");
          pos = event.key == "ArrowUp" ? (pos -= 1) : pos;
          moveThroughSuggestions(event.key, pos, inputInitValue);
        }
      };
    } else if (pos == autoSearchs.length) {
      pos = 0;
      inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(
        autoSearchs[pos].children[0].innerHTML.indexOf(">") + 1,
        autoSearchs[pos].children[0].innerHTML.indexOf("/") - 1
      );
      document.onkeydown = () => {
        if (event.key == "ArrowDown" || event.key == "ArrowUp") {
          autoSearchs[pos].classList.remove("auto-search-selected");
          pos = event.key == "ArrowUp" ? (pos -= 1) : pos;
          moveThroughSuggestions(event.key, pos, inputInitValue);
        }
      };
    } else if (pos < autoSearchs.length) {
      autoSearchs[pos].classList.add("auto-search-selected");
      inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(
        autoSearchs[pos].children[0].innerHTML.indexOf(">") + 1,
        autoSearchs[pos].children[0].innerHTML.indexOf("/") - 1
      );
      pos += 1;
      document.onkeydown = () => {
        if (event.key == "ArrowDown" || event.key == "ArrowUp") {
          autoSearchs[pos - 1].classList.remove("auto-search-selected");
          pos = event.key == "ArrowUp" ? (pos -= 1) : pos;
          moveThroughSuggestions(event.key, pos, inputInitValue);
        }
      };
    }
  } else if ((keyPressed = "ArrowUp")) {
    if (pos == -1) {
      pos = autoSearchs.length - 1;
      autoSearchs[pos].classList.add("auto-search-selected");
      inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(
        autoSearchs[pos].children[0].innerHTML.indexOf(">") + 1,
        autoSearchs[pos].children[0].innerHTML.indexOf("/") - 1
      );
      document.onkeydown = () => {
        if (event.key == "ArrowDown" || event.key == "ArrowUp") {
          autoSearchs[pos].classList.remove("auto-search-selected");
          pos = event.key == "ArrowDown" ? (pos += 1) : pos;
          moveThroughSuggestions(event.key, pos, inputInitValue);
        }
      };
    } else if (pos > 0) {
      pos -= 1;
      autoSearchs[pos].classList.add("auto-search-selected");
      inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(
        autoSearchs[pos].children[0].innerHTML.indexOf(">") + 1,
        autoSearchs[pos].children[0].innerHTML.indexOf("/") - 1
      );
      document.onkeydown = () => {
        if (event.key == "ArrowDown" || event.key == "ArrowUp") {
          autoSearchs[pos].classList.remove("auto-search-selected");
          pos = event.key == "ArrowDown" ? (pos += 1) : pos;
          moveThroughSuggestions(event.key, pos, inputInitValue);
        }
      };
    } else if (pos == autoSearchs.length - 1) {
      pos = 0;
      autoSearchs[pos].classList.add("auto-search-selected");
      inputWeb.value = autoSearchs[pos].children[0].innerHTML.substring(
        autoSearchs[pos].children[0].innerHTML.indexOf(">") + 1,
        autoSearchs[pos].children[0].innerHTML.indexOf("/") - 1
      );
      document.onkeydown = () => {
        if (event.key == "ArrowDown" || event.key == "ArrowUp") {
          autoSearchs[pos].classList.remove("auto-search-selected");
          pos = event.key == "ArrowDown" ? (pos += 1) : pos;
          moveThroughSuggestions(event.key, pos, inputInitValue);
        }
      };
    } else if (pos == 0) {
      inputWeb.value = inputInitValue;
      document.onkeydown = () => {
        if (event.key == "ArrowDown" || event.key == "ArrowUp") {
          pos = event.key == "ArrowDown" ? (pos += 1) : pos;
          moveThroughSuggestions(event.key, pos - 1, inputInitValue);
        }
      };
    }
  }
}

function checkEmpty(lista, input, suggBox) {
  if (input.value == "" || suggestions.value == "") {
    suggBox.innerHTML = "";
    lista = [];
  }
}
/* AUTOCOMPLETADO SEARCH MOBILE */
const inputMobile = document.querySelector(".search-input-mobile");
var suggBoxMobile = document.querySelector(".auto-complete-mobile");
let timeoutMobile = null;

const cerrarSuggBoxMobile = () => {
  suggBoxMobile.innerHTML = "";
  opacityDiv.classList.add(none);
  //inputWeb.blur();
  autoPredict.detail = [];
};

inputMobile.addEventListener("keyup", (e) => {
  // Clear the timeout if it has already been set.
  // This will prevent the previous task from executing
  // if it has been less than <MILLISECONDS>
  //alert(e)
  clearTimeout(timeoutMobile);

  // Make a new timeout set to go off in 1000ms (1 second)
  timeoutMobile = setTimeout(() => {
    cargarPrediccionesMobile();
  }, 500);
});

//inputMobile.addEventListener('input', async (e) => {
// const cargarPrediccionesMobile = async() => {
function cargarPrediccionesMobile() {
  GetBusquedaData();
  timeoutMobile = setTimeout(() => {
    suggestions = autoPredict.detail;
    //alert(autoPredict.search);
    //alert(JSON.stringify(suggestions[1]));
    let userData = inputMobile.value;
    let mayoresCatsRepetidas = [];
    let mayoresSubCatsRepetidas = [];

    if (userData.length > 0) {
      opacityDiv.classList.remove(none);
    } else {
      opacityDiv.classList.add(none);
    }

    nombresCat = [];
    //var palabrasUserData = userData.toLocaleLowerCase().split(" ");
    if (suggestions && userData.length > 0) {
      /*busquedas = suggestions.filter(data => {
                  var i = 0;
                  palabrasUserData.forEach(palabra => {
                    if(data.nomProd.toLocaleLowerCase().toLocaleLowerCase().includes(palabrasUserData[i])){
                      i++;
                    }
                  });
                  return i == palabrasUserData.length;
                });
                suggestions = busquedas;*/

      //tomo todas las categorias
      suggestions.forEach((sugg) => {
        mayoresCatsRepetidas.push({
          cat: `${sugg.cat}`,
          cat_id: `${sugg.cat_id}`,
        });
        mayoresSubCatsRepetidas.push({
          subcat: `${sugg.subcat}`,
          subcat_id: `${sugg.subcat_id}`,
        });
      });
      //ordeno las categorias alfabeticamente y acomodo el array segun cantidad de coincidencias
      mayoresCatsRepetidas.sort((a, b) => a.cat_id.localeCompare(b.cat_id));
      mayoresSubCatsRepetidas.sort((a, b) =>
        a.subcat_id.localeCompare(b.subcat_id)
      );

      //remuevo las categorias repetidas
      mayoresCatsRepetidas = mayoresCatsRepetidas
        .filter((cat, index) => cat != mayoresCatsRepetidas[index - 1])
        .splice(0, 1);
      mayoresSubCatsRepetidas = mayoresSubCatsRepetidas
        .filter((subcat, index) => subcat != mayoresSubCatsRepetidas[index - 1])
        .splice(0, 1);

      //creo el html con las categorias limitadas
      suggestions = suggestions
        .splice(0, 3)
        .map((data) => {
          return (data = `<div class="auto-search">
                                        <a href='https://www.maximus.com.ar/DETALLE/${data.nomProd
                                          .split(" ")
                                          .join("-")}/ITEM_ID=${
            data.ID
          }/maximus.aspx' class="auto-link"><img class="imgSuggestion" src="https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/${
            data.codeImg
          }_100.jpg" width="50" height="50"><strong class="auto-link-name">${
            data.nomProd
          }</strong></a>
                                    </div>`);
        })
        .join("");

      //creo el html para la 1 categoria
      mayoresCatsRepetidas = mayoresCatsRepetidas
        .map((cat) => {
          return (cat = `<div class="auto-search">
                                      <a href="https://www.maximus.com.ar/ARTICULOS/CAT_ID=${cat.cat_id}/SCAT_ID=-1/SCA_ID=-1/m=-1/OR=1/maximus.aspx" class="auto-link sugg-cat-mobile">Busca más productos en<strong>&nbsp;${cat.cat}</strong></a>
                                  </div>`);
        })
        .join("");

      mayoresSubCatsRepetidas = mayoresSubCatsRepetidas
        .map((subcat) => {
          return (subcat = `<div class="auto-search">
                                      <a href="https://www.maximus.com.ar/ARTICULOS/CAT_ID=-1/SCAT_ID=${subcat.subcat_id}/SCA_ID=-1/m=-1/OR=1/maximus.aspx" class="auto-link sugg-cat-mobile">Busca más productos en<strong>&nbsp;${subcat.subcat}</strong></a>
                                  </div>`);
        })
        .join("");

      //creo el html de las sugerencias mas el html de las categorias a mostrar
      let totalHTML =
        suggestions +
        ' <hr class="thin-line container"> ' +
        mayoresCatsRepetidas +
        ' <hr class="thin-line container"> ' +
        mayoresSubCatsRepetidas;

      /*  if(suggestions.length > 0){
                    suggBoxMobile.innerHTML = totalHTML;
                }else{
                    suggBoxMobile.innerHTML = '<div class="auto-search">No se encontraron coincidencias</div>';
                }*/

      //
      if (suggestions.length > 0) {
        suggBoxMobile.innerHTML = totalHTML;
        let inputInitValue = inputMobile.value;
        document.onkeydown = (event) => {
          if (event.key == "ArrowDown" || event.key == "ArrowUp") {
            moveThroughSuggestions(event.key, 0, inputInitValue);
          } else if (event.key === "Escape") {
            cerrarSuggBox();
            inputWeb.blur();
          }
        };
      } else {
        suggBoxMobile.innerHTML =
          '<div class="auto-search">No se encontraron coincidencias</div>';
      }
      //
    } else {
      checkEmpty(suggestions, inputMobile, suggBoxMobile);
    }
  }, 500);
}

//CERRAR SIDE BAR AL APARECER UN MODAL
$(document).on("show.bs.modal", "#modalcomprobantenologueado", () => {
  //WEB
  cerrarSideBarWeb();

  //MOBILE
  cerrarSideBarMobile();
});

const cerrarSideBarWeb = () => {
  document.body.classList.remove(unscrollable);
  sidebarMenuWeb.classList.remove(sidebarActive);
  hamburguesaWeb.classList.remove(hamburgerWebInactive);
  cruzWeb.classList.add(none);
  opacityDiv.classList.add(none);
};

const cerrarSideBarMobile = () => {
  if (cruz.classList.contains(claseCruzActiva)) {
    document.body.classList.remove(unscrollable);
    cruz.classList.remove(claseCruzActiva);
    menu.classList.remove(hamburgerInactivo);
    for (span of spans) {
      span.classList.remove(hamburgerInactivo);
    }

    if (subCategoriasLeft.classList.contains(slideActive)) {
      subCategoriasLeft.classList.remove(slideActive);
    }

    for (ul of ulCatsLeft) {
      if (ul.classList.contains(sideUlActive)) {
        ul.classList.remove(sideUlActive);
      }
    }
    menuCategorias.classList.remove(menuCatActive);
  }
};

//CERRAR CATEGORIAS SECUNDARIAS AL PASAR EL MOUSE SOBRE LAS ESTATICAS
const catsSecs = [
  ...document.querySelectorAll(".apertura-cat-principal-static"),
];
catsSecs.map((cat) => {
  cat.addEventListener("mouseover", () => {
    agregarNone();
  });
});
