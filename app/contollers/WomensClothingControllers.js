const womensClothing = require('../models/WomensClothing');

exports.clothingRegister = (req, res) => {
    const womensClothing = new WomensClothing({
        id: req.body.id,
        main_picture: body.main_picture,
        descriptions: body.descriptions,
        price: body.price,
    })
 }