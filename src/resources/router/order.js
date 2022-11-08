const orderController = require('../controllers/OrderController')
const orderRouter = (app) => {
    app.post('/api/createOrder', orderController.createOrder)
}
module.exports = orderRouter