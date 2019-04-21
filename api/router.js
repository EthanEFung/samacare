const express = require('express');
const router = express.Router();

const UploaderCtrl = require('./controllers/UploaderCtrl');
const ConfigurationCtrl = require('./controllers/ConfigurationCtrl');

router.get('/user', (req, res) => {
  res.send({ express: 'CONNECTED' });
});

const uploaderCtrl = new UploaderCtrl();
router.post('/upload', uploaderCtrl.post);

const configurationCtrl = new ConfigurationCtrl();
router.get('/configurations/:id', configurationCtrl.get);
router.post('/configurations', configurationCtrl.post);


module.exports = router;
