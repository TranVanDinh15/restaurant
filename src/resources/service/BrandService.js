const db = require('../../models/index')
const handleCreatebrand = (data) => {
    return new Promise(async (resolve, reject) => {
        try {

            await db.Brands.create({
                brandId: data.brandId,
                name: data.name,
                address: data.address,
                phone: data.phone,
                status: data.status,
            })
            resolve({
                errCode: 0,
                message: 'oke! create success :))'
            })
        } catch (error) {
            reject(error)
        }
    })
}
const handleGetAllBrand = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allBrand = await db.Brands.findAll({
                raw: true
            });
            resolve(allBrand)
        } catch (error) {
            reject(error)
        }
    })
}
const handleUpdateService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const dbBrands = await db.Brands
            const BrandUpdate = await dbBrands.update(
                {
                    name: data.name,
                    address: data.address,
                    phone: data.phone,
                },
                {
                    where: { id: data.id },
                }
            );
            resolve({
                errCode: 0,
                message: 'update success !!'
            })
        } catch (error) {
            reject(error)
        }
    })
}
const handleDeleteService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const dbBrands = await db.Brands
            const deleteBrand = await dbBrands.destroy({
                where: {
                    id: data.id
                }
            })
            if (deleteBrand == undefined) {
                resolve({
                    errCode: 1,
                    message: 'Brands exitnt in system !!'
                })
            }
            resolve({
                errCode: 0,
                message: 'Delete Brands Success !!'
            })
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    handleCreatebrand,
    handleGetAllBrand,
    handleUpdateService,
    handleDeleteService
}