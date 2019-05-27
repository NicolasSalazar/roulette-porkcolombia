
function array1() {
  $.getJSON("porkcolombia.json", x => {
    var tiposRecetas = x[0].tipo_recetas;
    var contImgs = document.getElementById("roulette-inner");
    for (var y of tiposRecetas) {
      console.log(y.imagen);
      var imgTemp = document.createElement("img");
      imgTemp.src = y.imagen;
      imgTemp.style =  "display: block"
      contImgs.appendChild(imgTemp);
    }
  });
}

function array2() {
  $.getJSON("porkcolombia.json", x => {
    console.log(x[1]);
  });
}
function array3() {
  $.getJSON("porkcolombia.json", x => {
    console.log(x[2]);
  });
}
function array4() {
  $.getJSON("porkcolombia.json", x => {
    console.log(x[3]);
  });
}
