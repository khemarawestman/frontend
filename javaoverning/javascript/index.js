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

/*let nummer = parseInt(prompt("Ange ett nummer (1-7):"));
let veckodag;

switch (nummer) {
  case 1:
    veckodag = "Måndag";
    break;
  case 2:
    veckodag = "Tisdag";
    break;
  case 3:
    veckodag = "Onsdag";
    break;
  case 4:
    veckodag = "Torsdag";
    break;
  case 5:
    veckodag = "Fredag";
    break;
  case 6:
    veckodag = "Lördag";
    break;
  case 7:
    veckodag = "Söndag";
    break;
  default:
    veckodag = false;
}

if (veckodag) {
  console.log(`Nummer ${nummer} motsvarar ${veckodag}.`);
} else {
  console.log("False. Ange ett nummer mellan 1 och 7.");
}*/

/*let nummer = parseInt(prompt("Ange ett nummer (1-12):"));
let månad;

if (nummer >= 1 && nummer <= 12) {
  switch (nummer) {
    case 1:
      månad = "Januari";
      break;
    case 2:
      månad = "Februari";
      break;
    case 3:
      månad = "Mars";
      break;
    case 4:
      månad = "April";
      break;
    case 5:
      månad = "Maj";
      break;
    case 6:
      månad = "Juni";
      break;
    case 7:
      månad = "Juli";
      break;
    case 8:
      månad = "Augusti";
      break;
    case 9:
      månad = "September";
      break;
    case 10:
      månad = "Oktober";
      break;
    case 11:
      månad = "November";
      break;
    case 12:
      månad = "December";
      break;
  }
}

if (månad) {
  console.log(`Nummer ${nummer} motsvarar månaden ${månad}.`);
} else {
  console.log("False. Ange ett nummer mellan 1 och 12.");
}
*/

let weight = prompt("Skriv in din vikt");
let length = prompt("Skriv in din längd");
let bmi;
bmi = weight / (length / 100) ** 2;

if (bmi < 18.5) {
  console.log("undervikt");
} else if (bmi <= 25) {
  console.log("du har normal vikt");
} else if (bmi <= 30) {
  console.log("du är överviktig");
} else if (bmi > 30) {
  console.log("Du lider av fetma! Gå till gymmet och bränn fett förfan!");
} else {
  console.log("Skriv in din vikt rätt!");
}
