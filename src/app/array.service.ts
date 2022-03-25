import { Injectable } from '@angular/core';

@Injectable()
export class ArrayService {
  
    private personArray = Array<Person>();
    constructor(){
    this.personArray.push(new Person('Gino', 'Paolo', 36))
    this.personArray.push (new Person('Orietta', 'Berti', 36.5))
    this.personArray.push(new Person('Orazio', 'Grinzosi', 37.5))

  }
  
  public GetPersonArray(): Array<Person> {
    return this.personArray
  }

  public AddPerson(vname: string, vsurname: string, vtemperature: number){
    this.personArray.push(new Person(vname, vsurname, vtemperature))
  }
}

export class Person {
  name: string
  surname: string
  temperature: number

  constructor(vname: string, vsurname: string, vtemperature: number) {
    this.name = vname
    this.surname = vsurname
    this.temperature = vtemperature
  }

}
