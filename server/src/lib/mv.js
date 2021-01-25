const { resolve } = require('path');
const path = require('path');
const storage = require('../storaje');
      fs = require('fs');

const moveFile = (file, storagePath) => {
    const filePath = path.join(storagePath, file.name);

    return new Promise((resolve, reject) => {
        fs.promises.acces(filePath)
        .then(() => reject(new Error(`Archivo ${file.name} existe y está listo`)))
        .catch(() =>
            file.mv(filePath, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            })
        );
    });
};
module.exports = moveFile;