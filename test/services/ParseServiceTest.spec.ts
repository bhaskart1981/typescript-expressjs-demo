import ParseService from "../../src/parse/services/ParseService"

describe('Parse Service', ()=>{
    const parseService = new ParseService();

    describe('Test happy path', ()=>{
     it('Should return Iparse object', async ()=> {
         const result = await parseService.parseUserData({data: 'JOHN0000MICHAL0009994567'})
         expect(result).toEqual({
                firstName: "JOHN0000",
                lastName: "MICHAL000",
                clientId: "9994567"
            })
     })

     it('Should return Iparse object for edgecase data', async ()=> {
        const result = await parseService.parseUserData({data: 'Bhaskar0009903434'})
        expect(result).toEqual({
               firstName: "Bhaskar0",
               lastName: "009903434",
               clientId: ""
           })
    })
    })
})