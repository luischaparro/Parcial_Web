var edit = false;

function guardar() {
  var likes = document.getElementById("gustos").value;
  var fila =
    "<tr><td>" +
    likes +
    "</td><td>" +
    0 +
    "</td><td>" +
    '<span class="editar" onclick="editarfila(this)">Editar</span>' +
    "</td></tr>";
  var registro = document.createElement("TR");
  registro.innerHTML = fila;
  document.getElementById("tabla_gustos").appendChild(registro);
}

function editarfila(nodo) {
  if (edit == false) {
    var nTd = nodo.parentNode;
    var nTr = nTd.parentNode;
    var nbotones = document.getElementById("contenedorbotones");
    var nsTr = nTr.getElementsByTagName("td");
    var gusto = nsTr[0].textContent;
    var porcentaje = nsTr[1].textContent;

    var filaeditable =
      '<td><input class="input" type="text" name="gusto" id="gusto" value="' +
      gusto +
      '" size="5"></td>' +
      '<td><input class="input" type="text" name="porcentaje" id="porcentaje" value="' +
      porcentaje +
      '" size="5"</td>' +
      "</td><td>En edición</td>";
    console.log(filaeditable);
    nTr.innerHTML = filaeditable;

    nbotones.innerHTML =
      "<p>Pulse Aceptar para guardar los cambios o cancelar para anularlos</p>" +
      '<input type="submit" class="button is-success" onclick="capturarEnvio()" value="Aceptar"> <input type="reset" onclick="window.location.reload()" class="button is-danger" value="Cancelar">';
    edit = "true";
  } else {
    alert(
      "Solo se puede editar una línea. Recargue la página para poder editar otra"
    );
  }
}
function capturarEnvio() {
  console.log("*****************");
  var nodoboton = document.getElementById("contenedorbotones");
  nodoboton.innerHTML =
    '<form name = "formulario1" action="tabla.html" method="get" onsubmit="capturarEnvio()" onreset="anular()>' +
    '<input type="hidden" name="telefono" value="' +
    document.querySelector("#tel").value +
    '">' +
    '<input type="hidden" name="telefono" value="' +
    document.querySelector("#tel").value +
    '">' +
    '<input type="hidden" name="email" value="' +
    document.querySelector("#email").value +
    '">' +
    '<input type="hidden" name="name" value="' +
    document.querySelector("#user").value +
    '">' +
    '<input type="submit" class="button is-success" onclick="capturarEnvio()" value="Aceptar"> <input type="reset" onclick="window.location.reload()" class="button is-danger" value="Cancelar">';
  document.formulario.submit();
}