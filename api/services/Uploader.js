const cloudinary = require('cloudinary');
const db = require('../db/config');
const File = require('../models/File');
const uuid = require('uuid')

class Uploader {

  async upload(file) {
    // Nice, and nice useage of await/async
    const image = await cloudinary.uploader.upload(file.path);

    return File.findOrCreate({
      where: {
        id: uuid.v4(),
        secure_url: image.secure_url
      }
    });
  }
}

module.exports = Uploader;
