"use strict";

const prompt = require("prompt-sync")();
let a = Number(prompt("Kiek sausainių iškepė Tautvydas? "));
let b = Number(prompt("Kiek žmonių dar atnešė sausainių? "));;
let c = Number(prompt("Kiek iš viso žmonių dalyvavo šventėje (įskaitant Tautvydą)? "))

let sausainiu_zmogui = Math.floor((b+1)*a/c)
let Tautvydo_sausainiai = (b+1)*a%c

console.log(
  `Kiekvienas dalyvis gavo ${sausainiu_zmogui} sausainiu. \nTautvydas papildomai pasiėmė ${Tautvydo_sausainiai} sausainius`
);