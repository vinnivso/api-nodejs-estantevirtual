import express from "express"
import { OlympicDatabase } from "../data/OlympicDatabase"
import ManageIdentity from "../services/ManageIdentity"

export class EndpointCreateCompetition {
  async createCompetition(request:express.Request, response:express.Response):Promise<void> {
    try {
      const id = new ManageIdentity().generateId()
      const {competition, athlete, value, unity} = request.body

      if((typeof competition !== "string") || (competition === "")) {
        response.status(422).json({messange:`Por favor, verifique se o campo de COMPETITION é do tipo STRING e não esteja NULL`})
      } else if((typeof athlete !== "string") || (athlete === "")) {
        response.status(422).json({messange:`Por favor, verifique se o campo de ATHLETE é do tipo STRING e não esteja NULL`})
      } else if((typeof unity !== "string") || (unity === "")) {
        response.status(422).json({messange:`Por favor, verifique se o campo de UNITY é do tipo STRING e não esteja NULL`})
      } else if((typeof value !== "number") || (value === null)) {
        response.status(422).json({message: `Por favor, verifique se o campo de VALUE é do tipo NUMBER e não esteja NULL`})
      } else {
        await new OlympicDatabase().createCompetition(id, competition, unity,value,athlete)
        response.status(201).json({message:`Competition created`})
      }
    } catch (error:any) {
      response.status(500).json({message: error.message})
    }
  }
}