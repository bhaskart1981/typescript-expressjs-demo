class UserService {
    constructor(){
    }

    //In realtime this will connect to model and db and get the user details by username
    public getUserByUserName(username){
        return {
           id: 'uuid',
           username: username,
           role: 'Admin',
           firstName: 'firstName'
        }
      }
}

export default UserService;