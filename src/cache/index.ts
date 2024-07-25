import { createClient } from 'redis';
import { redisURL_DEV, redisURL_PROD } from '../config';
import Logger from '../core/Logger';



const redisURL=process.env.NODE_ENV === 'production' ? redisURL_PROD : redisURL_DEV;
const client = createClient({ url: redisURL });

client.on('connect', () => Logger.info('Cache is connecting'));
client.on('ready', () => Logger.info('Cache is ready'));
client.on('end', () => Logger.info('Cache disconnected'));
client.on('reconnecting', () => Logger.info('Cache is reconnecting'));
client.on('error', (e) => Logger.error(e));

(async () => {
  await client.connect();
})();

// If the Node process ends, close the Cache connection
process.on('SIGINT', async () => {
  await client.disconnect();
});

export default client;
