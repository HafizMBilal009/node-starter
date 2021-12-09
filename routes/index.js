const router = require('express').Router();
const sayHello = require('../controllers');

router.get('/hello', sayHello);

module.exports = router;
