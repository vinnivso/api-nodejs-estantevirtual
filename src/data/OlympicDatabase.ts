import BaseDatabase from "./BaseDatabase"

export class OlympicDatabase extends BaseDatabase {
  static tableName = "estantevirtual_challenge_olympicgames"

  async createCompetition(id:string, competition:string, athlete:string, value:number, unity:string, status?:string):Promise<void> {
    try {
      await BaseDatabase.connection
        .insert({id, competition, athlete, value, unity, status})
        .into(OlympicDatabase.tableName)
    } catch (error) {
      console.log(error)
    }
  }

}