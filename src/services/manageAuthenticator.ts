import * as jwt from "jsonwebtoken"
import AuthenticationData from "../entities/AuthenticationData"
import dotenv from "dotenv"

dotenv.config()

export default class ManageAuthenticator {
  generateToken(input:AuthenticationData, expiresIn:string = process.env.JWT_EXPIRES_IN!):string {
    return jwt.sign(input, process.env.JWT_KEY as string, {expiresIn})
  }

  getTokenData(token:string):AuthenticationData | null {
    try {
      const payload = jwt.verify(token, process.env.JWT as string) as AuthenticationData
      return {id: payload.id, role: payload.role}
    } catch (error) {
      return null
    }
  }
}