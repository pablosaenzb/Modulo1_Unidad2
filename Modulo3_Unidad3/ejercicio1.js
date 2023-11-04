var distancia = parseFloat(prompt("Ingrese la distancia en metros:"));

function determinarMedioDeTransporte(distancia) {
  if (distancia >= 0 && distancia <= 1000) {
    alert("pie");
  } else if (distancia > 1000 && distancia <= 10000) {
    alert("bicicleta");
  } else if (distancia > 10000 && distancia <= 30000) {
    alert("colectivo");
  } else if (distancia > 30000 && distancia <= 100000) {
    alert("auto");
  } else {
    alert("avion");
  }
}

determinarMedioDeTransporte(distancia);


