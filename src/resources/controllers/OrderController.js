const orderService = require('../service/OrderService')
class OrderController {
    async createOrder(req, res) {
        try {
            const result = await orderService.createOrderService(req.body)
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
module.exports = new OrderController