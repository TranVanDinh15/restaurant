const db = require('../../models/index')
const createTableService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.brandId || !data.name || !data.description || !data.status) {
                resolve({
                    errCode: 1,
                    message: 'Missing Parameter !!'
                })
            }
            await db.Tables.create({
                brandId: data.brandId,
                name: data.name,
                description: data.description,
                status: data.status
            })
            resolve({
                errCode: 0,
                message: 'Create food success !!'
            })
        } catch (error) {
            reject(error)
        }
    })
}
const getAllTableService = () => {
    return new Promise(async (resolve, rejct) => {
        try {
            const result = await db.Tables.findAll({
                raw: true,
                // where: {
                //     brandId: data.brandId
                // }
            })
            resolve({
                errCode: 0,
                data: result
            })
        } catch (error) {
            rejct(error)
        }
    })
}
module.exports = {
    createTableService,
    getAllTableService
}