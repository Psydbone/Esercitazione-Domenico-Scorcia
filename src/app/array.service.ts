import { Injectable } from "@angular/core";

@Injectable()
export class ArrayService{
  public getArray() : Person[]{
    var ginoPaoli = new Person("Gino","Paolo",36);
    var oriettaBerti = new Person ("Orietta","Berti",36.5);
    var orazioGrinzosi = new Person ("Orazio","Grinzosi",37.5);
    return ([ginoPaoli,oriettaBerti,orazioGrinzosi]);
  }
}

export class Person{
  name :string;
  surname :string;
  temperature : number;

     constructor(name: string, surname:string, temperature: number){
       this.name = name;
       this.surname = surname;
       this.temperature=temperature;
     }

     getName(){
       return this.name;
     }

     getSurname(){
       return this.surname;
     }
     getTemperature(){
       return this.temperature;
     }
}