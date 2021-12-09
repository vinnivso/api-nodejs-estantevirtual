import BaseDatabase from "../data/BaseDatabase"

async function createOlympicTable():Promise<boolean> {
  try {
    await BaseDatabase.connection.raw(`
      CREATE TABLE IF NOT EXISTS estantevirtual_challenge_olympicgames (
        id VARCHAR(255) NOT NULL,
        competicao VARCHAR(255) NOT NULL,
        atleta VARCHAR(255) NOT NULL,
        value INT NOT NULL,
        unidade VARCHAR(255) NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `)
    console.log(`Tabela criada com sucesso`)
    return true
  } catch (error:any) {
    console.log(error.message || error.sqlMessage)
    return false
  }
}

createOlympicTable()
  .finally(() => BaseDatabase.connection.destroy())