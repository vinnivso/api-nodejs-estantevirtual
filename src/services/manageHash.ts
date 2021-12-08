import bcryptjs from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export default class ManageHash {
  generateHash = (text:string):string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    return bcryptjs.hashSync(text, bcryptjs.genSaltSync(rounds) as string)
  }

  compareHash = (text:string, hash:string):boolean => {
    return bcryptjs.compareSync(text,hash)
  }
}
