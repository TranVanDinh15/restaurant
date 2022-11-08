const brandService = require('../service/BrandService')
class BrandController {
    async createBrand(req, res) {
        const createBrandHandle = await brandService.handleCreatebrand(req.body)
        // return res.status(200).json(createBrandHandle)
        return res.status(200).json(createBrandHandle)
    }
    async getAllBrand(req, res) {
        const allBrands = await brandService.handleGetAllBrand()
        console.log(allBrands)
        // return res.status(200).json(allBrands)
        return res.send(allBrands)

    }
    async updateBrand(req, res) {
        try {
            const updateRespone = await brandService.handleUpdateService(req.body)
            return res.status(200).json(
                updateRespone
            )
        } catch (error) {
            return res.status(200).json(
                error
            )
        }
    }
    async deleteBrand(req, res) {
        const deleteBrandService = await brandService.handleDeleteService(req.body)
        try {
            return res.status(200).json(
                deleteBrandService
            )
        } catch (error) {
            return res.status(200).json(
                error
            )
        }
    }
}
module.exports = new BrandController