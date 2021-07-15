"use strict";

const acceptableAnswers = ["yes", "y", "no", "n"];

const high = "To high!";
const low = "To low!";

let totalCorrectAnswers = 0;

const visitedCountries = [
  "canada",
  "mexico",
  "scotland",
  "singapore",
  "thailand",
  "united arab emirates",
  "bahrain",
];

// uses a random number
// between 1 and 50 as the correct answer
// "Guess a number between 1 and 50. You have four total tries.",
//     Math.floor(Math.random() * 50) + 1,

//     "Name a country besides USA Kason has visited. You have six total tries.",
//     visitedCountries,

// setup questions and the correct answer each question

const questions = [
  "Is Kason's favorite sport hockey?",
  "Was Kason born in the USA?",
  "Is Kason creative?",
  "Does Kason love cats?",
  "Does Kason have 10 dogs?",
  "Guess a number between 1 and 50. You have four total tries.",
  "Name a country besides USA Kason has visited. You have six total tries.",
];

const answers = [
  "y",
  "no",
  "no",
  "no",
  "no",
  Math.floor(Math.random() * 50) + 1,
  visitedCountries,
];
function getUserName(promptText) {
  let userName = prompt(promptText);
  while (!userName) {
    userName = prompt("Please enter a valid name.");
  }
  alert("Just kidding! It's nice to have you here " + userName + ".");
  return userName;
}

console.log(getUserName("FBI! What is your name?!"));

function askQuestion(question) {
  // will trigger on all other questions in the questionsAndAnswers array
  let resp = prompt(question);
  let lowerResp = resp.toLowerCase();

  return lowerResp;
}
function isCorrect(answer, question) {
  const index = questions.indexOf(question);
  if (index === 5) {
    answers[5].includes(answer);
  } else if (index === 6) {
  } else {
    if (!acceptableAnswers.includes(answer)) {
      let invalidAnswer =
        "Invalid answer. Acceptable answers are 'yes', 'y', 'no', 'n'.";
      console.log(invalidAnswer);
      alert(invalidAnswer);
    } else {
      // correct else incorrect
      if (answer === answers[index]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
for (let i = 0; i < 7; i++) {
  const currentQuestion = questions[i];
  const userResponse = askQuestion(currentQuestion);
  const isUserCorrect = isCorrect(userResponse, currentQuestion);
  console.log(currentQuestion, userResponse, isUserCorrect);
}

// for (let i = 0; i < questionsAndAnswers.length; i++) {
//   switch (i) {
//     // random number question
//     case questionsAndAnswers.length - 2: // triggers on the second to last question in the array, which is currently the number question
//       // 4 chances to guess the number
//       let answeredCorrectly = false;
//       const randomNumber = questionsAndAnswers[i][1];

//       for (let n = 0; n < 4; n++) {
//         let resp = prompt(questionsAndAnswers[i][0]);

//         if (resp == randomNumber) {
//           totalCorrectAnswers++;
//           console.log(`Correct. The number was ${randomNumber}`);
//           alert("Correct");

//           // got the answer correct so break out of for loop
//           answeredCorrectly = true;
//           break;
//         } else if (resp > randomNumber) {
//           console.log(high, randomNumber);
//           alert(high);
//         } else {
//           console.log(low, randomNumber);
//           alert(low);
//         }
//       }
//       // didn't get the answer correct within 4 tries
//       if (!answeredCorrectly) {
//         const wrong = `Out of tries, the correct number was ${randomNumber}`;
//         console.log(wrong);
//         alert(wrong);
//       }
//       break;
//     // countries visited question
//     case questionsAndAnswers.length - 1: // last question of the questionsAndAnswers array
//       // 6 chances to guess the answer
//       let correct = false;
//       // const availableAnswers = questionsAndAnswers[i][1];
//       const possibleAnswersAlert = `Correct. Possible answers were: ${visitedCountries}`;
//       for (let x = 0; x < 6; x++) {
//         let resp = prompt(questionsAndAnswers[i][0]);
//         let lowerResp = resp.toLowerCase();
//         if (questionsAndAnswers[i][1].includes(lowerResp)) {
//           totalCorrectAnswers++;
//           console.log(possibleAnswersAlert);
//           alert(possibleAnswersAlert);

//           // got the answer correct so break out of for loop
//           correct = true;
//           break;
//         } else {
//           console.log("Incorrect");
//           alert("Incorrect");
//         }
//       }
//       // didn't get the answer correct within 6 tries
//       if (!correct) {
//         const wrong = `Out of tries, possible answers were: ${visitedCountries}`;
//         console.log(wrong);
//         alert(wrong);
//       }
//       break;

//         askQuestion();
//       }

// }

// console.log(
//   `You got ${totalCorrectAnswers} out of ${questionsAndAnswers.length} questions correct`
// );
// alert(
//   `You got ${totalCorrectAnswers} out of ${questionsAndAnswers.length} questions correct`
// );
