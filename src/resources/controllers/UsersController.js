const userService = require('../service/UserService')
class UsersController {
    async createUserController(req, res) {
        try {
            const result = await userService.handleCreateUser(req.body)
            return res.status(200).json({
                ...result
            })
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!'
            })
        }
    }
    async getAllUserController(req, res) {
        try {
            const result = await userService.handleGetAllUser()
            return res.status(200).json(result)
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!',
            })
        }
    }
    async handleLogin(req, res) {
        try {
            const emailUser = await req.body.email
            const passwordUser = await req.body.password
            const result = await userService.serviceLogin(emailUser, passwordUser)
            return res.status(200).json(
                result
            )
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!',
                error
            })
        }
    }
    async handleLogout(req, res) {
        try {
            const result = await userService.logoutService(req.body)
            return res.status(200).json(
                result
            )
        } catch (error) {
            return res.status(200).json({
                errCode: -1,
                message: 'Error from sever!!',
                error
            })
        }
    }
    async updateUserController(req, res) {
        
    }
}
module.exports = new UsersController