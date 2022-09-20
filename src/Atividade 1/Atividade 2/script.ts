import  PromptSync  = require ( 'prompt-sync' ); 
import { ContaB } from "./ContaBancaria" ; 

const prompt =  PromptSync  ( ) ;

const NConta =  Number(prompt( 'Qual número da sua conta? ' ) ) ;

const nome  =  prompt( 'Digite seu nome inteiro, ' ) ;


const agencia = Number(prompt( 'Qual é a marca do seu patinete? ' )) ;

const  contabancaria = new ContaB ( {
    NConta,
    nome,
    agencia,

} ) ; 

console.log ( `O nome do usuário é ${nome}, o número da sua conta é ${ NConta } e pertence a agência é ${agencia} }. ` )