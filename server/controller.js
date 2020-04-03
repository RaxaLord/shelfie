module.exports = {
  getInventory: (req, res, next) => {
    const db = req.app.get('db');
    db.get_inventory()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => console.log(err));
  },

  createProduct: (req, res, next) => {
    const db = req.app.get('db');
    db.create_product([req.body.name, req.body.price, req.body.imgurl])
      .then((res) => {
        res.status(200).send(res);
      })
      .catch((err) => console.log(err));
  },
};
