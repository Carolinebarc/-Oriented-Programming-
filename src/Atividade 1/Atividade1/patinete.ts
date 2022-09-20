interface  NewPatinete  {
    NRoda : number ; 
    cor : string ; 
    marca: string; 

}
class  Patinete  {     // ou export class
    NRoda: number ; 
    cor : string ; 
    marca: string; 
      
  
   constructor  ( { NRoda , cor, marca } : NewPatinete ) {  // declarar tipo se não fizer interface
    // TODO: Criar o construtor
    this.NRoda = NRoda ;
    this.cor =  cor ;
    this.marca = marca 
  
    }
 

   }


 
 export { Patinete } ; 