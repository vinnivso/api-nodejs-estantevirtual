import BaseDatabase from "../data/BaseDatabase"

async function createOlympicTable():Promise<boolean> {
  try {
    await BaseDatabase.connection.raw(`
      CREATE TABLE IF NOT EXISTS estantevirtual_challenge_olympicgames (
        id VARCHAR(255) NOT NULL,
        competition VARCHAR(255) NOT NULL,
        athletes VARCHAR(255) [][],
        unity VARCHAR(255) NOT NULL,
        created_at TIMESTAMP,
        finished_at TIMESTAMP
      );
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