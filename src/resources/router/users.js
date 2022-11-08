const userController = require('../controllers/UsersController')
const userRouter = (app) => {
    app.post('/api/createUser', userController.createUserController)
    app.post('/api/login', userController.handleLogin)
    app.post('/api/logout', userController.handleLogout)
    app.get('/api/getAllUser', userController.getAllUserController)
    app.post('/api/updateUser', userController.updateUserController)
}
module.exports = userRouter