import express, {NextFunction, Request, Response} from 'express';
import ParseToken from '../../util/ParseToken';
import ParseService from '../services/ParseService';
import {roles} from '../../helpers/roles';
import IParse from '../interfaces/IParse';
import HttpExceptions from '../../exceptions/HttpExceptions';
import UserService from '../../user/services/UserService';

const permittedRoles = [roles.Admin, roles.Employee, roles.Member]

class ParseController {
  public router = express.Router();
  public tokenParse;
  public userService;
  public parseService;

  constructor() {
      this.initializeRoutes();
      this.tokenParse = new ParseToken();
      this.userService = new UserService();
      this.parseService = new ParseService();
  }

  public initializeRoutes() {
      //this.router.use(this.path, validateJWTToken)  //we have differnt ways to implemt authentication like  using secret key and JWT token in realtime
      this.router.post('/v1/parse',  this.parseUserData1);
      this.router.post('/v2/parse',  this.parseUserData2);

  }

  parseUserData1 = (request: Request, response: Response, next: NextFunction) => {
          
    this.validateRequestAndUser(request, next)
    
    const result: IParse = this.parseService.parseUserData(request.body);

    response.send({
         statusCode: 200,
         data: result
     })
  }

  parseUserData2 = (request: Request, response: Response, next: NextFunction) => {
    
    this.validateRequestAndUser(request, next)
    
    const result: IParse = this.parseService.parseUserData(request.body);
    
    response.send({
        statusCode: 200,
        data: {
            firstName: result.firstName.slice(0, 4),
            lastName: result.lastName.slice(0, 6),
            clientId: result.clientId.replace(/(\d{3})(\d{4})/, "$1-$2")
        }
    })
 }

 validateRequestAndUser(request, next){
    const userData = request.body;
    if( !userData || !userData.data){
        next(new HttpExceptions(400, 'Post body input not provided'));
    }

    const jwtToken  = request.headers.Authorization || 'dummyToken'; // In realtime we will get the auth token otherwise API gateway will not allow to call the endpoint
    const username: string =  this.tokenParse.parseToken(jwtToken);
    const user = this.userService.getUserByUserName(username);

    if( !user ){
       next(new HttpExceptions(404, `User not found for username: ${username}`));
   }

    const userRole: string = user.role;
    if(!permittedRoles.includes(userRole)){
       next(new HttpExceptions(403, `Insufficient privileges`));
    }

 }

}

export default ParseController;