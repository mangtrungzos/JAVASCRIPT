// Logical operator = used to combine or manipulate boolean values
//                    (true or false)

//                    AND = &&
//                    OR = ||
//                    NOT = !

const temp = 25;
// const result = temp > 0 && temp <=30 ? "The weather is good" : "The weather is bad";
// console.log(result);

if (temp > 0 && temp <= 30) {
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

const isSunny = true;

const weather = !isSunny ? "sunny" : "cloudy";
console.log(weather);