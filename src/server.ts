import { port } from './config';
import app from './app';

app
  .listen(port, () => {
    console.info(`server running on port : ${port}`);
  })
  .on('error', (e) => console.error(e));
