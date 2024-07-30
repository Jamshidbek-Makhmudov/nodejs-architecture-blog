import app from './app';
import { port } from './config';
import Logger from './core/Logger';

app
  .listen(port, () => {
    Logger.info(`server running on port : ${port}`);
  })
  .on('error', (e) => Logger.error(e));
/**todo
 * #.get with id
 * #.caching  
 * #.github CI
 * #.deploy
 * */