export class Athlete {
  constructor(
    private name:string,
    private value:number
  ){}
  public getName = ():string => this.name
  public getValue = ():number => this.value
}