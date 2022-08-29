/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  var subjects = [
    "The dog",
    "My grandma",
    "A fascist",
    "Joe Biden",
    "Goku",
    "A ghost from my past"
  ];
  var action = [" ate", " peed on", " stole", " broke", " threw away"];
  var victim = [
    " my homework",
    " my clean clothes",
    " my laptop",
    " my car keys",
    " my bike"
  ];
  var time = [
    " right before this.",
    " on my way over.",
    " yesterday.",
    " this morning.",
    " while I was distracted."
  ];

  function generateExcuse() {
    let str = "";
    var subIndex = Math.floor(Math.random() * 6);
    str += subjects[subIndex];
    var actIndex = Math.floor(Math.random() * 5);
    str += action[actIndex];
    var victimIndex = Math.floor(Math.random() * 5);
    str += victim[victimIndex];
    var timeIndex = Math.floor(Math.random() * 5);
    str += time[timeIndex];
    var h3 = document.querySelector("#myExcuse");
    h3.innerText = str;
  }

  generateExcuse();
};
