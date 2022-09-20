import  PromptSync  = require ( 'prompt-sync' ); 
import { Patinete } from "./patinete" ; 

const prompt =  PromptSync  ( ) ;

const NRoda =  Number(prompt( 'Quantas rodas seu patinete tem? ' ) ) ;

const  cor  =  prompt( 'Qual é cor do seu patinete, ' ) ;


const  marca = prompt( 'Qual é a marca do seu patinete? ' ) ;

const  patinete = new Patinete ( {
    NRoda,
    cor,
    marca,

} ) ; 

console.log ( `Seu patinete tem ${ NRoda } rodas , da cor ${ cor } e marca ${ marca } ` )