const mongooseMaterial = require('mongoose');


const materialSchema = new mongooseMaterial.Schema({
    label: String,
    company: String,
    description: String,
    color: String,
});

module.exports = mongooseMaterial.model('Material', materialSchema);