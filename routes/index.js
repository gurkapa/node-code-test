'use strict';
let express = require('express');
let router = express.Router();

let jobRoutes = require('./job');

router.get('/status', (req, res) => {
  res.status(200).send('OK');
});

router.get('/job', jobRoutes.GET_list);
router.get('/job/:jobId', jobRoutes.GET);
router.post('/job', jobRoutes.POST);
router.put('/job/:jobId', jobRoutes.PUT);
router.delete('/job/:jobId', jobRoutes.DELETE);

module.exports = router;
