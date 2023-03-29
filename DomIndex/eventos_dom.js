// q: que es DOM?

//q: create javascript code to show mouse in screen

function showMousePosition() {
  document.addEventListener("mousemove", function(event) {
      let position = "Posición del mouse: " + event.clientX + ", " + event.clientY;
      document.getElementById("mousePosition").innerHTML = position;
  });
}

showMousePosition();

document.getElementById("form1-submit").addEventListener("click", function(event) {
  event.preventDefault();
  var fname = document.getElementById("form-fname").value;
  var lname = document.getElementById("form-lname").value;
  var fullname = fname + " " + lname;
  var p = document.createElement("p");
  p.innerHTML = "Nombre completo: " + fullname;
  document.getElementById("form1").appendChild(p);
});

document.getElementById("btn-insert-r").addEventListener("click", function() {
  var table = document.getElementById("sampleTable");
  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "Nueva fila";
  cell2.innerHTML = "Nueva fila";
});

document.getElementById("btn-insert-c").addEventListener("click", function() {
  var table = document.getElementById("sampleTable");
  for (var i = 0; i < table.rows.length; i++) {
      var cell = table.rows[i].insertCell(table.rows[i].cells.length);
      cell.innerHTML = "Nueva columna";
  }
});

document.getElementById("btn-change").addEventListener("click", function() {
  var rowIndex = document.getElementById("rowIndex").value - 1;
  var colIndex = document.getElementById("colIndex").value - 1;
  var newValue = document.getElementById("newValue").value;
  var table = document.getElementById("myTable");
  if (table.rows[rowIndex] && table.rows[rowIndex].cells[colIndex]) {
      table.rows[rowIndex].cells[colIndex].innerHTML = newValue;
  }
});

document.getElementById("btn-add-color").addEventListener("click", function() {
  var select = document.getElementById("colorSelect");
  var option = document.createElement("option");
  option.text = "Color " + Math.floor(Math.random() * 1000);
  select.add(option);
});

document.getElementById("btn-rmv-color").addEventListener("click", function() {
  var select = document.getElementById("colorSelect");
  select.remove(select.selectedIndex);
});

document.getElementById("imagenGato").addEventListener("mouseenter", function() {
  var width = Math.floor(Math.random() * 301) + 300;
  var height = Math.floor(Math.random() * 301) + 300;
  var src = "http://placekitten.com/" + width;
});