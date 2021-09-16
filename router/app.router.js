const express = require('express');
const router = express.Router();
const appConroller = require('../controller/app.controller')

router.post("/compute", appConroller.compute)
router.post("/git-compute", appConroller.gitcompute)

module.exports = router
