// Función de activación
function activacion(n) {
  return n >= 0 ? 1 : 0;
}

// Perceptrón XOR con 3 entradas
function perceptronXOR() {
  // Pesos sinápticos aleatorios
  let w1 = Math.random() * 0.1;
  let w2 = Math.random() * 0.1;
  let w3 = Math.random() * 0.1;
  let b = 1; // Bias

  // Tasa de aprendizaje
  const tasaAprendizaje = 0.4;

  // Conjunto de entrenamiento
  const entrenamiento = [
    { inputs: [0, 0, 0], output: 0 },
    { inputs: [0, 0, 1], output: 1 },
    { inputs: [0, 1, 0], output: 1 },
    { inputs: [0, 1, 1], output: 0 },
    { inputs: [1, 0, 0], output: 1 },
    { inputs: [1, 0, 1], output: 0 },
    { inputs: [1, 1, 0], output: 0 },
    { inputs: [1, 1, 1], output: 1 }
  ];

  // Entrenamiento del perceptrón
  const epocasMax = 100; // Número máximo de iteraciones de entrenamiento
  let epocas = 0;

  while (epocas < epocasMax) {
    let errores = 0;

    for (let i = 0; i < entrenamiento.length; i++) {
      let entrada = entrenamiento[i].inputs;
      let salidaEsperada = entrenamiento[i].output;
      let suma = (w1 * entrada[0]) + (w2 * entrada[1]) + (w3 * entrada[2]) + b;
      let salidaPerceptron = activacion(suma);
      let error = salidaEsperada - salidaPerceptron;

      // Ajuste de pesos según el error
      w1 += tasaAprendizaje * error * entrada[0];
      w2 += tasaAprendizaje * error * entrada[1];
      w3 += tasaAprendizaje * error * entrada[2];
      b += tasaAprendizaje * error;

      if (error !== 0) {
        errores++;
      }
    }

    // Si no hay errores, detener el entrenamiento
    if (errores === 0) {
      console.log(`Entrenamiento completado en ${epocas + 1} entrenamientos.`);
      break;
    }
    
    epocas++;
  }

  if (epocas === epocasMax) {
    console.log('El entrenamiento no convergió en el número máximo de entrenamientos.');
  }

  // Mostrar los pesos finales
  console.log(`Pesos finales: w1=${w1.toFixed(5)}, w2=${w2.toFixed(5)}, w3=${w3.toFixed(5)}`);

  // Prueba del perceptrón con las entradas de entrenamiento
  for (let i = 0; i < entrenamiento.length; i++) {
    let entrada = entrenamiento[i].inputs;
    let suma = (w1 * entrada[0]) + (w2 * entrada[1]) + (w3 * entrada[2]) + b;
    let salida = activacion(suma);
    //console.log(`Entrada: ${entrada}, Salida: ${salida}`);
  }
}

// Ejecutar la función
perceptronXOR();
