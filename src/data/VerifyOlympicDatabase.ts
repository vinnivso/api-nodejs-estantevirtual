import BaseDatabase from "./BaseDatabase";
import { OlympicDatabase } from "./OlympicDatabase";


export class VerifyOlympicDatabase extends OlympicDatabase {
  async verifyCompetition(competition:string | object) {
    const result = await BaseDatabase.connection(OlympicDatabase.tableName)
      .where("competition", "LIKE", `%${competition}%`)
    return result
  }

  async verifyCompetitionAndAthlete(competition:string | object, athlete?:string | object) {
      const result = await BaseDatabase.connection(OlympicDatabase.tableName)
        .where({competition, athlete})
      return result
  }

  async verifyCompetitionStatus(competition:string | object) {
      const result = await BaseDatabase.connection(OlympicDatabase.tableName)
        .where("competition", "LIKE", `%${competition}%`)
        .andWhere("status", "LIKE", "DONE")
      return result
  }
}