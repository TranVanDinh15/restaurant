const userController = require('../controllers/FoodController')
const foodRouter = (app) => {
    app.post('/api/createFood', userController.createController)
    app.post('/api/getFoodBrands', userController.getFoodAll)
    app.get('/api/getFoodAll', userController.getFoodAlls)
}
module.exports = foodRouter