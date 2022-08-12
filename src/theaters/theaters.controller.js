const service = require('./theaters.service')


async function list(req, res, next){
    const data = await service.list();
    return res.json({data});
};


module.exports = {
    list,
}