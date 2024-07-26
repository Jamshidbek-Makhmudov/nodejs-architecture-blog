import app from './app';
import { port } from './config';
import Logger from './core/Logger';

app
  .listen(port, () => {
    Logger.info(`server running on port : ${port}`);
  })
  .on('error', (e) => Logger.error(e));
/**todo
 *  1.redis connection
 *  2.get urls 
 * 3.get with id
 * 4.caching  
 * */