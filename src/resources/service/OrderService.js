const db = require('../../models/index')
const createOrderService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.employeeId || !data.tableId || !data.description || !data.status) {
                resolve({
                    errCode: 1,
                    message: 'Missing Parameter !!'
                })
            }
            await db.Orders.create({
                employeeId: data.employeeId,
                tableId: data.tableId,
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
module.exports = {
    createOrderService
}