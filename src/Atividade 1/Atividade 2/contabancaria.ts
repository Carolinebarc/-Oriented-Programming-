interface  NewConta  {
    NConta : number ; 
    nome : string ; 
    agencia : number; 

}
class  ContaB  {  
    NConta : number ; 
    nome : string ; 
    agencia : number; 
 
   
      
  
   constructor  ( { NConta , nome, agencia } : NewConta ) {  // declarar tipo se não fizer interface
    // TODO: Criar o construtor
    this.NConta = this.NConta ;
    this.nome =  nome ;
    this.agencia = agencia; 
  
    }
 

   }


 
 export { ContaB } ; 