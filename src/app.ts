import express, {Application} from 'express';
import bodyParser from 'body-parser';

class App {
    public app: Application;
    public port: number;

    constructor(controllers, port){
        this.app = express();
        this.port = port
        this.initializeMiddleWare();
        this.initializeControllers(controllers);
    }

    private initializeMiddleWare() {
       this.app.use(bodyParser.json());
    }

    private initializeControllers(controllers) {
         controllers.forEach(controller => {
             this.app.use('/api', controller.router);
         });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Express server up and running on ${this.port}`)
        })
    }
}

export default App;