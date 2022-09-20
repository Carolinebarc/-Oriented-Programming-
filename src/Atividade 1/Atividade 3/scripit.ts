import  PromptSync  = require ( 'prompt-sync' ); 
import { paciente } from "./paciente" ; 

const prompt =  PromptSync  ( ) ;

const Nregistro =  Number(prompt( 'Qual seu número de registro? ' ) ) ;

const nome  =  prompt( 'Digite seu nome inteiro, ' ) ;


const cpf = Number(prompt( 'Qual é o seu cpf? ' )) ;

const doenca = prompt('Qual doença você tem?')

const  paciente = new paciente ( {
    Nregistro,
    nome,
    cpf,

} ) ; 

console.log ( `O nome do paciente é ${nome}, o número do registro é  ${ Nregistro } e é portador de ${doenca} }. ` )