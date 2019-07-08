var age = Number(prompt("What is your Age?"));
if (age < 0) {
    console.log("Come back once you are out of womb");
}
else if (age === 21) {
    console.log("Happy 21st anniversary");
}
else if (age % 2 !== 0) {
    console.log("Your age is Odd");
}
else if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square");
}