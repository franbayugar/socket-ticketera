const { Router } = require('express');
const router = Router();
const { boxGet, boxInsert } = require('../controller/box');


router.get('/', boxGet );
router.post('/', boxInsert );

module.exports = router;