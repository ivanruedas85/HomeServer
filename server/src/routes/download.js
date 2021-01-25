const router = require('express').Router();
const mime = require('mime-types');
const procesPath = require('../lib/path');

router.get('/:path', (req, res, err) => {
  try {
    const file = procesPath(req.params.path).absolutePath;
    const mimetype = mime.lookup(file);
    console.log(mimetype);
    res.setHeader('Disposición de contenido', `Archivo adjunto: filename=${file}`);
    res.setHeader('Tipo de contenido', mimetype);
    res.dowload(file);
  } catch(err) {
    next(err);
  }
});
module.exports = router;