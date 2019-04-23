const express = require('express');
const router = express.Router();

const UploaderCtrl = require('./controllers/UploaderCtrl');
const ConfigurationCtrl = require('./controllers/ConfigurationCtrl');

router.get('/user', (req, res) => {
  res.send({ express: 'CONNECTED' });
});

// Interesting class pattern for controllers. Haven't seen this before - what do you think the benefits are?
// Seems like there's not much you would do w/ the constructor. Also, it seems like the routes would always be singletons
const uploaderCtrl = new UploaderCtrl();
router.post('/upload', uploaderCtrl.post);

const configurationCtrl = new ConfigurationCtrl();
router.get('/configurations/:id', configurationCtrl.get);
router.post('/configurations', configurationCtrl.post);


module.exports = router;
