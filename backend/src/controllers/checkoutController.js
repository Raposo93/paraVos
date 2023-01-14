const db = require("../database/models");


module.exports = {
    checkout: async function (req, res) {
      // return res.send({ ...req.body, userId: req.session.userLogged.id });
      let order = await db.Order.create(
        { ...req.body, userId: req.session.userLogged.id },
        {
          include: db.Order.OrderItems,
        }
      );
      res.json({ ok: true, status: 200, order: order });
    },
  };