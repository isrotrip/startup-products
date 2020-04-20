const AllModel = require('../models/index.js');

const Startup = AllModel.Startup;
const Product = AllModel.Product;

const Op = require('sequelize').Op;

class Controller {
  static getStartups(req, res) {
    const options = {};

    options.include = [
      { model: Product, as: 'products' }
    ];

    Startup
      .findAll(options)
      .then(startups => {
        res.render('list-startup.ejs', { startups });
      })
      .catch(error => {
        console.log(error)
        res.send(error.message);
      })
  }

  static getFormCreateProduct(req, res) {
    res.render('create-product-form.ejs');
  }
 
  static createProduct(req, res) {
    const body = {
      name: req.body.name,
      totalAsset: req.body.totalAsset,
      type: req.body.type,
      onBusiness: req.body.onBusiness,
      StartupId: req.params.startupId
    }

    Product
      .create(body)
      .then(product => {
        res.redirect('/');
      })
      .catch(error => {
        res.send(error.message);
      })
  }

  static testModel(req, res) {
    const options = {};

    if (req.query.search) {
      options.where = {
        name: {
          [Op.iLike]: `%${req.query.search}%`
        }
      }
    }

    Startup
      .findAll(options)
      .then(result => {
        res.send(result);
      })
      .catch(error => {
        res.send(error.message);
      });
  }
}

module.exports = Controller;