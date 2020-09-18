import ParseModel from '../models/ParseModel';

class ParseService {
    public parseModel;
    constructor(){
        this.parseModel = new ParseModel();
    }

    public parseUserData(userData){
        return this.parseModel.parseUserData(userData);
    }
}

export default ParseService;