const tableController = require('../controllers/TableController')
const tableRouter = (app) => {
    app.post('/api/createTable', tableController.createTable)
    app.get('/api/getAllTable', tableController.getAllTable)
}
module.exports = tableRouter