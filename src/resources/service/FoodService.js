const db = require('../../models/index')
const createService = (data) => {
    return new Promise(async (resolve, rejct) => {
        try {

            await db.Foods.create({
                brandId: data.brandId,
                name: data.name,
                type: data.type,
                cost: data.cost,
                price: data.price,
                quantity: data.quantity,
                avatar: data.avatar,
                description: data.description,
                status: data.status
            })
            resolve({
                errCode: 0,
                message: 'Create food success !!'
            })
        } catch (error) {
            rejct(error)
        }
    })
}
const getFoodService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allFood = await db.Foods.findAll({
                raw: true,
                where: {
                    brandId: data.brandId
                }
            })
            resolve(allFood)
        } catch (error) {
            reject(error)
        }
    })
}
const getFoodAllService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allFood = await db.Foods.findAll({
                raw: true
            })
            resolve(allFood)
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createService,
    getFoodService,
    getFoodAllService
}