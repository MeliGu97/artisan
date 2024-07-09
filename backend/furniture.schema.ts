const mongooseFurniture = require('mongoose');

const furnitureSchema = new mongooseFurniture.Schema({
  name: String,
  category: { type: String, enum: ['armoire', 'etagere'] },
  materials: [{ type: mongooseFurniture.Schema.Types.ObjectId, ref: 'Material' }],
  quantity: Number,
});

module.exports = mongooseFurniture.model('Furniture', furnitureSchema);
