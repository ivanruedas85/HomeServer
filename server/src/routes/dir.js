const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const procesPath = require('../lib/path');

router.post('/:path?', async(req, res, next) => {
  const dirPath = procesPath(req.params.path);
  const name = req.body.name;
  if(!name){
    return res.status(400).json({
      success: false,
      message: 'No se a especificado el nombre',
    });
  }
  try {
    await fs.promises.mkdir(path.join(dirPath.absolutePath.name));
  }catch (e){
    return next(e);
  }
  res.json({
    success: true,
    message: 'Directorio creado'
  });
});
module.exports = router;