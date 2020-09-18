class ParseToken {

    constructor() {
        
    }

    //In realtime we have to parse this JWT token with secret key
    public parseToken(token){
        return {
            username: 'Test'
        }
    }
}

export default ParseToken;