import IParse from '../interfaces/IParse'

class ParseModel {
    constructor() {

    }

    public parseUserData(userData){
      const userDetails: string = userData.data;
      const response: IParse = {
          firstName: userDetails.slice(0, 8),
          lastName: userDetails.slice(8, 17),
          clientId: userDetails.slice(17, 25)
      }
      return response
    }
}

export default ParseModel;