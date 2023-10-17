// Biggest
// Gör ett program som tar emot två stycken numeriska värden. Programmet ska utvärdera vilket tal som är störst och skriva ut det.

const numberOne = 100;
const numberTwo = 1000;

if (numberOne > numberTwo) {
    console.log(numberOne + ' är större');
} else if (numberTwo > numberOne) {
    console.log(numberTwo + ' är större');
} else {
    console.log('Båda är lika stora');
}

// Even or not

// Gör en program som tar ett number och ta reda på om talet är jämt eller udda.

const evenNumber = 5;

// evenNumber % 2 === 0 är detta ett jämnt tal alltså vi får ingen "rest" 
if (evenNumber % 2 === 0) {
    console.log('Talet är jämnt');
} else {
    console.log('Talet är udda');
}

// Lisebergsvakten

// Gör ett program som ska sitta i en sensor på lisebergs åkattration Helix. För att få åka helix ska man vara minst 150cm lång. Programmet ska skriva ut true eller false.

const height = 155;

if (height >= 150) {
    console.log(true);
} else {
    console.log(false);
}

// Lisebergsvakten 2

// På Liseberg finns 4 olika åkband; small, medium, large och platinum. För att få åka Balder krävs large eller platinum. Gör ett program som kollar ens åkband och skriver ut ifall man får åka Balder eller inte.

// && AND
// || OR

const ticket = 'large';

if (ticket === 'large' || ticket === 'platinum') {
    console.log('Du får åka Balder');
} else {
    console.log('No Balder for you');
}

// BMI kalkylator

// BMI ( Body Mass Index ) sägs vara ett hälsomått som visar på under eller övervikt. Det bör dock tas med en nypa salt då vi alla människor är unika ( och awesome! ).

// Formeln för BMI är följande:

// kroppsvikten i kg / (kroppslängden i meter * kroppslängden i meter) 

const personHeight = 1.70;
const weight = 70;

const bmi = weight / (personHeight * personHeight);

if (bmi < 18.5) {
    console.log('Undervikt');
} else if (bmi >= 18.5 && bmi <= 25) {
    console.log('Normalvikt');
} else if (bmi >= 25 && bmi <= 30) {
    console.log('Övervikt');
} else {
    console.log('Fetma');
}


const animal = 'cat';

// if (animal === 'cat') {

// } else if (animal === 'dog') {

// } else {

// }

switch (animal) {
    case 'cat':
        console.log('Detta är en katt');
        break;
    case 'dog':
        console.log('Detta är en hund');
        break;
    default:
        console.log('Inget av ovanstående');
}
