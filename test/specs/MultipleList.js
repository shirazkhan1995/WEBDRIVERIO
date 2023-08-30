describe("suite", ()=>{
    it("test", async()=>{
        expectedList = ['Wednesday, Aug 30', 'Messages', 'Chrome']
        actualList = []
        const listValues = await $$('android.widget.TextView')
        for(ele of listValues){
            actualList.push(await ele.getText())
        }
        await expect(actualList).toEqual(expectedList)
    })
})