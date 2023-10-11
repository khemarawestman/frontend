/*let a = 10;
let b = 20;
if (a < b) {
  console.log("det stämmer !");
} else {
  console.log("det stämmer inte !");
}*/
/*let c = "apple";
let e = "pear";

if (c > e) {
  console.log("det stämmer!");
} else {
  console.log("det stämmer inte !");
}*/
/*const number = prompt("Skriv in din ålder?");
if (number % 2 === 0) {
  console.log("det är jämt tal");
} else {
  console.log("det är udda tal");
}*/
/*let pass = prompt("Vilket åkband har du (small, medium, large, platinum)?");

if (pass === "large" || pass === "platinum") {
  console.log("Du får åka Balder!");
} else {
  console.log("Du får tyvärr inte åka Balder.");
}*/

// Funktion för att beräkna BMI
function calculateBMI(weight, height) {
  let heightInMeters = height / 100;
  let bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}

// Funktion för att ge en klassificering baserat på BMI
function classifyBMI(bmi) {
  if (bmi < 18.5) {
    return "Undervikt";
  } else if (bmi <= 25) {
    return "Normalvikt";
  } else if (bmi <= 30) {
    return "Övervikt";
  } else {
    return "Fetma";
  }
}

// Fråga användaren om vikt och längd
let weight = prompt("Ange din vikt i kg:");
let height = prompt("Ange din längd i cm:");

// Konvertera till nummer och beräkna BMI
let weightNumber = parseFloat(weight);
let heightNumber = parseFloat(height);

// Kolla om inmatningen är numerisk
if (!isNaN(weightNumber) && !isNaN(heightNumber)) {
  let bmi = calculateBMI(weightNumber, heightNumber);
  let classification = classifyBMI(bmi);

  // Skriv ut klassificeringen
  alert(
    `Ditt BMI är ${bmi.toFixed(2)} och du klassificeras som ${classification}.`
  );
} else {
  alert("Ogiltiga indata. Var vänlig ange numeriska värden.");
}
