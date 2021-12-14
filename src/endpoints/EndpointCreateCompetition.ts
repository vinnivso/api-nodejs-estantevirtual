import express from "express"
import { OlympicDatabase } from "../data/OlympicDatabase"
import { VerifyOlympicDatabase } from "../data/VerifyOlympicDatabase"
import ManageIdentity from "../services/ManageIdentity"

export class EndpointCreateCompetition {
  async createCompetition(request:express.Request, response:express.Response):Promise<void> {
    try {
      const id = new ManageIdentity().generateId()
      const {competition, athlete, value, unity, status} = request.body

      const [filterByCompetitionStatus] = await new VerifyOlympicDatabase().verifyCompetitionStatus(competition)
      const [filterByCompetitionAndAthlete] = await new VerifyOlympicDatabase().verifyCompetitionAndAthlete(competition, athlete)

      if((typeof competition !== "string") || (competition === "")) {
        response.status(422).json({messange:`Por favor, verifique se o campo de COMPETITION é do tipo STRING e não esteja NULL`})
      } else if((typeof athlete !== "string") || (athlete === "")) {
        response.status(422).json({messange:`Por favor, verifique se o campo de ATHLETE é do tipo STRING e não esteja NULL`})
      } else if((typeof unity !== "string") || (unity === "")) {
        response.status(422).json({messange:`Por favor, verifique se o campo de UNITY é do tipo STRING e não esteja NULL`})
      } else if((typeof value !== "number") || (value === null)) {
        response.status(422).json({message: `Por favor, verifique se o campo de VALUE é do tipo NUMBER e não esteja NULL`})
      } else if(filterByCompetitionStatus) {
        response.status(422).json({message:`Impossível cadastrar atleta para a competição selecionada, pois o STATUS da mesma é DONE`})
      } else if(filterByCompetitionAndAthlete) {
        response.status(409).json({message:`Atleta já cadastrado na competição`})
      } else {
        await new OlympicDatabase().createCompetition(id, competition, unity,value,athlete,status)
        response.status(201).json({message:`Competition created`})
      }
      
    } catch (error:any) {
      response.status(500).json({message: error.message})
    }
  }
}