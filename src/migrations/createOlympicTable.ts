import BaseDatabase from "../data/BaseDatabase"
import pokemons from "./PokemonGo.json"

async function createOlympicTable():Promise<boolean> {
  try {
    await BaseDatabase.connection.raw(`
      CREATE TABLE IF NOT EXISTS estantevirtual_challenge_olympicgames (
        id VARCHAR(255) NOT NULL,
        competicao VARCHAR(255) NOT NULL,
        

      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `)
    console.log(`Tabela criada com sucesso`)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

createOlympicTable()
  .finally(() => BaseDatabase.connection.destroy())