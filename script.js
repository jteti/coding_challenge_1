var BMI, massJohn, heightJohn, massMark, heightMark, markHigherBMI;

massJohn = 92;
heightJohn = 1.95;

massMark = 78;
heightMark = 1.69;

johnBMI = massJohn / (heightJohn * heightJohn);
markBMI = massMark / (heightMark * heightMark);
console.log(markBMI, johnBMI)

markHigherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI less than John's? " + markHigherBMI);
