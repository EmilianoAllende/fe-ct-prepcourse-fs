function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if(numero === 2) {
    return true;
  } else if(numero === 3) {
    return true;
  } else if(numero === 5) {
    return true;
  } else if(numero === 7) {
    return true;
  }  else if(numero === 11) {
    return true;
  } else if(numero % 2 == 0) {
    return false;
  } else if(numero % 3 == 0 ) {
    return false;
  } else if(numero % 5 == 0) {
    return false;
  } else if(numero % 7 == 0) {
    return true
  }

}

module.exports = esNumeroPrimo;
