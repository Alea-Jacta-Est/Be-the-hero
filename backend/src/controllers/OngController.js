const crypto = require('crypto');
const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        // Para obter todos os parâmtros do request
        //const params = request.query;

        // Para acessar parâmetro de rota
        //const routeParams = request.params;

        // Para acessar o requestBody
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
    }
}