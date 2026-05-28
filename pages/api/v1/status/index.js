import database from "../../../../infra/database";

async function handler(request, response) {
    const result = await database.query("SELECT 1 + 1 AS sum ");
    response.status(200).json({chave: "são acima da média"});
}

export default handler 