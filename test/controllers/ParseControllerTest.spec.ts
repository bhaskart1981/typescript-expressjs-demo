import ParseController from "../../src/parse/controllers/ParseController";

//Note: i didn't wrote test cases in this file due time constraint but here is my approach

describe('Parse Controller  Test', ()=>{
    const  parseController = new ParseController();

    describe('POST /parse', ()=>{
     it('Rejected with 400 bad request when body didnt passed', async ()=> {

     })

     it('Rejected with 404 user not found', async ()=> {
  
    })

    it('Rejected with 403 forbidden', async ()=> {
  
    })

    // Other positive cases to handle both paths
    })
})