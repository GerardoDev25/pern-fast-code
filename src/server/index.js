import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import taskRoutes from '../routes/tasks.routes';

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routerApp();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(morgan('dev'));
  }

  routerApp() {
    this.app.use(taskRoutes);
  }

  listen() {
    this.app.listen(3000, () => {
      console.log('server on port 3000');
    });
  }
}
export default Server;
