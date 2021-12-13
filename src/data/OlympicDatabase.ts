import { Competition } from "../entities/Competition"
import BaseDatabase from "./BaseDatabase"

export class OlympicDatabase extends BaseDatabase {
  private static tableName = "estantevirtual_challenge_olympicgames"

  async createCompetition(competition:string, unity:string, value:number, athlete?:string):Promise<void> {
    try {
      await BaseDatabase.connection.raw(`
      INSERT INTO estantevirtual_challenge_olympicgames (competition, unity, value, athlete)
      VALUES (
        "${new Competition(competition, unity, value, athlete).getCompetition()}",
        "${new Competition(competition, unity, value, athlete).getUnity()}",
        "${new Competition(competition, unity, value, athlete).getValue()}",
        "${new Competition(competition, unity, value, athlete).getAthlete()}",
      )
      `)
    } catch (error) {
      console.log(error)
    }
  }
}