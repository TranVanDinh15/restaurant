const foodService = require('../service/FoodService')
class FoodController {
    async createController(req, res) {
        try {
            const createService = await foodService.createService(req.body)
            return res.status(200).json(createService)
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!',
                error
            })
        }
    }
    async getFoodAll(req, res) {
        try {
            const getAllFood = await foodService.getFoodService(req.body)
            return res.status(200).json(getAllFood)
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!',
                error
            })
        }
    }
    async getFoodAlls(req, res) {
        try {
            const getAllFood = await foodService.getFoodAllService()
            return res.status(200).json(getAllFood)
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!',
                error
            })
        }
    }
}
module.exports = new FoodController