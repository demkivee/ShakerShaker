const Drinks = require('../models').Drinks;

module.exports = {

    
    add(req, res) {
        return Drinks
          .create({
            drinkId: req.body.drinkId,
            drinkName: req.body.drinkName,
            drinkType: req.body.drinkType,
          })
          .then((classroom) => res.status(201).send(classroom))
          .catch((error) => res.status(400).send(error));
      },

};
