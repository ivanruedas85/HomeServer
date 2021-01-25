const {manageErr} = require('./base');

const enoent = (err, req, res, next) => {
    manageErr(err, {
        code: 'ENOENT',
        message: 'El archivo o directorio no existe',
        statusCode: 400,
    });
    next(err);
};
module.exports = enoent;