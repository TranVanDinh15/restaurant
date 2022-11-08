const brandController = require('../controllers/BrandController')
const userRouter = require('./users')
const foodRouter = require('./food')
const tableRouter = require('./table')
const orderRouter = require('./order')
function router(app) {
    // Api tạo mới chi nhánh
    app.post('/api/createBrand', brandController.createBrand)
    app.get('/api/getAllBrands', brandController.getAllBrand)
    app.post('/api/updateBrand', brandController.updateBrand)
    app.post('/api/deleteBrand', brandController.deleteBrand)
    userRouter(app)
    foodRouter(app)
    tableRouter(app)
    orderRouter(app)
}
module.exports = router