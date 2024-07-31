// dbConnection.ts
import mongoose from 'mongoose';
import { db, dbURL_DEV, dbURL_PROD } from '../config';
import Logger from '../core/Logger';

const dbURL = process.env.NODE_ENV === 'production' ? dbURL_PROD : dbURL_DEV;
const dbURI = dbURL || `mongodb://localhost:27017/blog-app`;

const options = {
  autoIndex: true,
  minPoolSize: db.minPoolSize,
  maxPoolSize: db.maxPoolSize,
  connectTimeoutMS: 60000,
  socketTimeoutMS: 45000,
};

Logger.debug(dbURI);

function setRunValidators() {
  this.setOptions({ runValidators: true });
}

mongoose.set('strictQuery', true);

export const createConnection = async () => {
  mongoose.plugin((schema: any) => {
    schema.pre('findOneAndUpdate', setRunValidators);
    schema.pre('updateMany', setRunValidators);
    schema.pre('updateOne', setRunValidators);
    schema.pre('update', setRunValidators);
  });

  try {
    await mongoose.connect(dbURI, options);
    Logger.info('Mongoose connection done');
  } catch (e) {
    Logger.info('Mongoose connection error');
    Logger.error(e);
    throw e;
  }

  mongoose.connection.on('connected', () => {
    Logger.debug('Mongoose default connection open to ' + dbURI);
  });

  mongoose.connection.on('error', (err) => {
    Logger.error('Mongoose default connection error: ' + err);
  });

  mongoose.connection.on('disconnected', () => {
    Logger.info('Mongoose default connection disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close().finally(() => {
      Logger.info(
        'Mongoose default connection disconnected through app termination',
      );
      process.exit(0);
    });
  });

  return mongoose.connection;
};
