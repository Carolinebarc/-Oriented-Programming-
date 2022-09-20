"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var ContaBancaria_1 = require("./ContaBancaria");
var prompt = PromptSync();
var NConta = Number(prompt('Qual número da sua conta? '));
var nome = prompt('Digite seu nome inteiro, ');
var agencia = Number(prompt('Qual é a marca do seu patinete? '));
var contabancaria = new ContaBancaria_1.ContaB({
    NConta: NConta,
    nome: nome,
    agencia: agencia,
});
console.log("O nome do usu\u00E1rio \u00E9 ".concat(nome, ", o n\u00FAmero da sua conta \u00E9 ").concat(NConta, " e pertence a ag\u00EAncia \u00E9 ").concat(agencia, " }. "));
