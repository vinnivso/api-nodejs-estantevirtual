export class Competition {
  constructor(
    private competition: string,
    private unity: string,
    private value: number,
    private athlete?:string,
    private id?: string
  ) {}
  public getCompetition = ():string => this.competition
  public getUnity = ():string => this.unity
  public getValue = ():number => this.value
  public getAthlete = ():string | undefined => this.athlete
  public getId = ():string | undefined => this.id
}
