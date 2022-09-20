"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var Nregistro = Number(prompt('Qual seu número de registro? '));
var nome = prompt('Digite seu nome inteiro, ');
var cpf = Number(prompt('Qual é o seu cpf? '));
var doenca = prompt('Qual doença você tem?');
var paciente = new paciente({
    Nregistro: Nregistro,
    nome: nome,
    cpf: cpf,
});
console.log("O nome do paciente \u00E9 ".concat(nome, ", o n\u00FAmero do registro \u00E9  ").concat(Nregistro, " e \u00E9 portador de ").concat(doenca, " }. "));
