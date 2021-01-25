require ("dotenv").config();

const storage = process.env.HOME_CLOUD_STORAGE;
if(!storage){
    console.error(
        'Ruta de almacenamiento no definida',
        'Establecer un valor HOME_CLOUD_STORAGE para la variable de entorno'
    );
    process.exit(1);
}
module.exports = storage;