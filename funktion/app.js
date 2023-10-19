// number 1
/*function mylength(string) {
  return string.length;
}
const myString = "Hej, det här är en sträng!";
const length = mylength(myString);

console.log(length);*/

//Skriv en funktion som plockar ut året från en sträng i datumformat. Använd substring(startIndex, endIndex)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring.
//Funktionen ska ta en parameter, som ska vara en sträng.
//Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat
/*function year(myYear) {
  return myYear.substring(0, 4);
}
let result = year("2019-10-14");
console.log(result);*/
//överning 43

function calculate(num1, num2, operator) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Båda parametrarna måste vara siffror.");
    return;
  }

  if (
    typeof operator !== "string" ||
    !["+", "-", "*", "/"].includes(operator)
  ) {
    console.log('Ogiltig operator. Använd en av "+", "-", "*", eller "/".');
    return;
  }

  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      console.log("Det går inte att dividera med noll.");
      return;
    }
  }

  console.log(`Resultatet är: ${result}`);
  return result;
}
