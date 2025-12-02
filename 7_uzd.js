"use strict";

const prompt = require("prompt-sync")();
let puodeliu_skaicius = Number(prompt("Kiek tueime puodeliu? "));
let dezes_talpa = 3;

let dezuciu_skaicius = Math.floor(puodeliu_skaicius / dezes_talpa);
let nesupakuoti_puodeliai = puodeliu_skaicius % dezes_talpa;

console.log(
  `Turime ${dezuciu_skaicius} pilnas dėžes ir ${nesupakuoti_puodeliai} nesupakuotus puodelius`
);
