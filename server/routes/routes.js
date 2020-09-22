
const ProdController = require('../controllers/controller');

// ROUTES REQUIRE CONTROLLERS

module.exorts = function(ap){
    app.get('/', ProdController.index);
    app.post('/newprod', ProdController.newProd);
    app.get('/foods', ProdController.allFoods);
    app.get('/goods', ProdController.allGoods);
}