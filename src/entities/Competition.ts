import { Athlete } from "./Athlete"

export class Competition {
  constructor(
    private competitionName: string,
    private unity: string,
    private created_at:Date,
    private finished_at?:Date,
    private athletes?:Athlete,
    private id?: string
  ) {}
  public getCompetitionName = ():string => this.competitionName
  public getUnity = ():string => this.unity
  public getCreatedAt = ():Date => this.created_at
  public getFinishedAt = ():Date | undefined => this.finished_at
  public getAthletes = ():Athlete | undefined => this.athletes
  public getId = ():string | undefined => this.id
}
