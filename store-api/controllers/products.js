const getAllProductsStatic = async (req, res) => {
    res.status(200).json({ msg: 'Product Testing Routes' })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'Product Routes'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}