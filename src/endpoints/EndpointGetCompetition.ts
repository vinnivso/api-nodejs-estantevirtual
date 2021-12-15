import express from "express"
import { OlympicDatabase } from "../data/OlympicDatabase"
import { VerifyOlympicDatabase } from "../data/VerifyOlympicDatabase"

export class EndpointGetCompetition {
  async getCompetitions(request: express.Request, response:express.Response):Promise<void> {
    try {
      const {competition} = request.query

      const [filterByCompetition] = await new VerifyOlympicDatabase().verifyCompetition(competition as string)

      let result

      if(!filterByCompetition && competition !== undefined) {
        response.status(409).json({message:`COMPETITION não encontrada`})
      } else if(competition) {
        result = await new OlympicDatabase().getCompetition(competition)
      } else {
        result = await new OlympicDatabase().getAllCompetitions()
      }
      response.send(result)

    } catch (error:any) {
      response.status(500).json({message:`Algo deu errado. Para mais informações, veja: https://documenter.getpostman.com/view/16818323/UVR7LoJ9`})
    }
  }
}