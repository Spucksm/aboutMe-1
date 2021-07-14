"use strict";

let userName = prompt("FBI! What is your name?!");
alert("Just kidding! It's nice to have you here " + userName + ".");

const bio = document.getElementById("bio");
const goals = document.getElementById("goals");
const education = document.getElementById("education");
const work = document.getElementById("work");

const resp1 = prompt("Is Kason's favorite sport hockey?");
const lowerResp1 = resp1.toLowerCase();

if (lowerResp1 === "yes" || lowerResp1 === "y") {
  const answer = "Correct!";
  // console.log(answer);
  alert(answer);
} else if (lowerResp1 === "no" || lowerResp1 === "n") {
  const answer = "Incorrect";
  // console.log(answer);
  alert(answer);
} else {
  // console.log(answer);
  alert("Invalid answer");
}

const resp2 = prompt("Was Kason born in the USA?");
const lowerResp2 = resp2.toLowerCase();

if (lowerResp2 === "yes" || lowerResp2 === "y") {
  const answer = "Incorrect!";
  // console.log(answer);
  alert(answer);
} else if (lowerResp2 === "no" || lowerResp2 === "n") {
  const answer = "Correct! Kason was born in Scotland.";
  // console.log(answer);
  alert(answer);
} else {
  // console.log(answer);
  alert("Invalid answer");
}

const resp3 = prompt("Is Kason creative?");
const lowerResp3 = resp3.toLowerCase();

if (lowerResp3 === "yes" || lowerResp3 === "y") {
  const answer = "Incorrect";
  // console.log(answer);
  alert(answer);
} else if (lowerResp3 === "no" || lowerResp3 === "n") {
  const answer = "Correct!";
  // console.log(answer);
  alert(answer);
} else {
  // console.log(answer);
  alert("Invalid answer");
}

const resp4 = prompt("Does Kason love cats?");
const lowerResp4 = resp4.toLowerCase();

if (lowerResp4 === "yes" || lowerResp4 === "y") {
  const answer = "Incorrect. Dogs rule!";
  // console.log(answer);
  alert(answer);
} else if (lowerResp4 === "no" || lowerResp4 === "n") {
  const answer = "Correct! I love dogs!";
  // console.log(answer);
  alert(answer);
} else {
  // console.log(answer);
  alert("Invalid answer");
}

const resp5 = prompt("Does Kason have 10 dogs?");
const lowerResp5 = resp5.toLowerCase();

if (lowerResp5 === "yes" || lowerResp5 === "y") {
  const answer = "Incorrect " + userName + ", that's a work in progress.";
  // console.log(answer);
  alert(answer);
} else if (lowerResp5 === "no" || lowerResp5 === "n") {
  const answer = "Correct " + userName + ", I currently have two dogs.";
  // console.log(answer);
  alert(answer);
} else {
  // console.log(answer);
  alert("Invalid answer");
}
