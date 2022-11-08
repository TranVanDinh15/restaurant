const tableService = require('../service/Tableservice')
class TableController {
    async createTable(req, res) {
        try {
            const result = await tableService.createTableService(req.body)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!',
                error
            })
        }
    }
    async getAllTable(req, res) {
        try {
            const result = await tableService.getAllTableService()
            return res.status(200).json(result)
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!',
                error
            })
        }
    }
}
module.exports = new TableController