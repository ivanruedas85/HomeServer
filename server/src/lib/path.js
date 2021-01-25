const { win32 } = require('path');
const path = require('path');
const storage = require('../storaje');

const slash = process.platform === 'win32' ? '\\' : '/';
const procesPath = (urlPath) => {
    const relativePath = urlPath ? urlPath.replace(/--/g, slash) : slash;
    const absolutePath = path.join(storage, relativePath);
    return{relativePath, absolutePath};
};
module.exports = procesPath;