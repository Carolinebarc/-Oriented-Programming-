"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var patinete_1 = require("./patinete");
var prompt = PromptSync();
var NRoda = Number(prompt('Quantas rodas seu patinete tem? '));
var cor = prompt('Qual é cor do seu patinete, ');
var marca = prompt('Qual é a marca do seu patinete? ');
var patinete = new patinete_1.Patinete({
    NRoda: NRoda,
    cor: cor,
    marca: marca,
});
console.log("Seu patinete tem ".concat(NRoda, " rodas , da cor ").concat(cor, " e marca ").concat(marca, " "));
