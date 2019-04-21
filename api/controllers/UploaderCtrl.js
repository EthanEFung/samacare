const Uploader = require('../services/Uploader');

class UploaderCtrl {
  async post(req, res) {
    try {
      console.log('trying to post!', req.files);
      const file = req.files[0];
      // TODO: add policy here
      // policy.isAuthorized()
      const uploader = new Uploader(/* scope */);
      const response = await uploader.upload(file);
      
      console.log('done!', response)
      return res.json(response);
    } catch (e) {
      console.log('nope!', e)
      return res.json({
        status: e.status,
        data: e
      });
    }
  }
}

module.exports = UploaderCtrl;