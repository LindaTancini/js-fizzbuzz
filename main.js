// Creo un ciclo con numeri che vanno da 1 a 100
for (let i = 1; i <= 100; i++) {
  // Multipli sia di 3 e 5 come "FizzBuzz"
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    // Multipli di 3 stampati come "Fizz"
  } else if (i % 3 === 0) {
    console.log("Fizz");
    // Multipli di 5 stampati come "Buzz"
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
