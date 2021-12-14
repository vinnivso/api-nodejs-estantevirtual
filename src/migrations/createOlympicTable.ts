import BaseDatabase from "../data/BaseDatabase"

async function createOlympicTable():Promise<boolean> {
  try {
    await BaseDatabase.connection.raw(`
    CREATE TABLE IF NOT EXISTS estantevirtual_challenge_olympicgames (
      id VARCHAR(255) PRIMARY KEY,
        competition VARCHAR(255) NOT NULL,
        athlete VARCHAR(255) NOT NULL,
        value FLOAT(5) NOT NULL,
        unity VARCHAR(255) NOT NULL,
        status ENUM("DONE", "UNDONE") DEFAULT "UNDONE"
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