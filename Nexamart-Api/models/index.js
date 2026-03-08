import dbConfig from '../config/db.config.js';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = (await import('./user.model.js')).default(mongoose);
db.product = (await import('./product.model.js')).default(mongoose);

export default db;

