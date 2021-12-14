import BaseDatabase from "./BaseDatabase";
import { OlympicDatabase } from "./OlympicDatabase";


export class VerifyOlympicDatabase extends OlympicDatabase {
  async verifyCompetitionAndAthlete(competition:string | object, athlete:string | object) {
      const result = await BaseDatabase.connection(OlympicDatabase.tableName)
        .where("competition", "LIKE", `%${competition}%`)
        .andWhere("athlete", "LIKE", `%${athlete}%`)
      console.log(result[0]);
      return result[0]
  }

  async verifyCompetitionStatus(competition:string | object) {
      const result = await BaseDatabase.connection(OlympicDatabase.tableName)
        .where("competition", "LIKE", `%${competition}%`)
        .andWhere("status", "LIKE", "DONE")
      return result
  }
}