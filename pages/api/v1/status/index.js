import database from "../../../../infra/database";

async function handler(request, response) {
    try {
        const result = await database.query("SELECT 1 + 2 AS sum ");
        let variavel = process.env;
        response.status(200).json({chave: "são acima da média", resultado: result.rows[0].sum, 'variavel_ambiente': variavel});
    } catch (error) {
        console.error("Erro na API:", error);
        response.status(500).json({erro: error.message});
    }
}

export default handler 