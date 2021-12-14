export class Competition {
  constructor(
    private competition: string,
    private athlete:string,
    private value: number,
    private unity: string,
    private id?: string,
    private status?: string
  ) {}
  public getCompetition = ():string => this.competition
  public getUnity = ():string => this.unity
  public getValue = ():number => this.value
  public getAthlete = ():string => this.athlete
  public getId = ():string | undefined => this.id
  public getStatus = ():string | undefined => this.status
}
