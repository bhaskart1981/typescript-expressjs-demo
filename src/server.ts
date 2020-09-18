import App from './app';
import ParseController from './parse/controllers/ParseController';

const port = process.env.PORT || 3000;
const app = new App(
    [ 
        new ParseController()
    ],
   port
 );

app.listen();