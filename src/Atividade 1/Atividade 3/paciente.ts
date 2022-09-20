interface  NewPaciente  {
    Nregistro : number ; 
    nome : string ; 
    cpf : number; 
    doença : string;

}
class  paciente  {  
    Nregistro : number ; 
    nome : string ; 
    cpf : number; 
    doenca : string;
    
 
   
      
  
   constructor  ( { Nregistro , nome, cpf, doenca, } : NewPaciente ) {  // declarar tipo se não fizer interface
    // TODO: Criar o construtor
    this.Nregistro = this.Nregistro ;
    this.nome =  nome ;
    this.cpf = cpf; 
    this.doenca = doenca;
  
    }
 

   }


 
 export { paciente } ; 